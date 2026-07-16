import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/schemas/contact";
import { isRateLimited } from "@/lib/rate-limit";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Try again later." },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input." },
      { status: 400 }
    );
  }

  const { name, email, message, honeypot } = parsed.data;

  // Honeypot tripped - pretend success, don't tip off the bot, don't send.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  // Fail loudly - never silently no-op or fall back to a fake success.
  if (!process.env.RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY is not set - cannot send.");
    return NextResponse.json(
      { ok: false, error: "Contact form is not configured (missing RESEND_API_KEY)." },
      { status: 500 }
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (!toEmail) {
    console.error("[contact] CONTACT_TO_EMAIL is not set - cannot send.");
    return NextResponse.json(
      { ok: false, error: "Contact form is not configured (missing CONTACT_TO_EMAIL)." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    // Resend's sandbox sender until a verified sending domain exists -
    // see CLAUDE.md Content Gap #4.
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: toEmail,
    replyTo: email,
    subject: `New portfolio contact from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    console.error("[contact] Resend send failed:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send. Try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
