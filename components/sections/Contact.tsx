"use client";

import { useState } from "react";
import { Phone, MessageCircle, Copy, Check } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyPhone() {
    await navigator.clipboard.writeText(profile.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="scroll-mt-20 relative bg-card/40 px-6 py-32">
      {/* Radial glow behind Contact, ported from docs/old-portfolio.html
          .contact-glow (~line 241) - decorative, deep wine, AA-exempt. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute -right-24 -top-24 size-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--color-wine)" }}
        />
      </div>

      {/* Centered column (reverted from the shared-left-edge layout per
          explicit instruction) - heading, intro, and phone row are
          text-centered; the form block is centered via mx-auto but its own
          fields stay left-aligned, standard form UX. */}
      <div className="mx-auto max-w-xl">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something"
            accent="great"
            tone="plum"
            align="center"
          />
        </Reveal>

        <Reveal>
          <p className="mt-3 text-center text-muted-foreground">
            Open to full-stack / software engineering roles. Reach out
            directly or send a message below.
          </p>
        </Reveal>

        {/* Phone + WhatsApp - Contact section only, never repeated
            elsewhere per CLAUDE.md "Phone & WhatsApp". */}
        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${profile.phone}`}
              className="pill-hover inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm"
            >
              <Phone className="size-4" aria-hidden="true" />
              {profile.phone}
            </a>
            <button
              type="button"
              onClick={copyPhone}
              aria-label={copied ? "Phone number copied" : "Copy phone number"}
              className="pill-hover inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm"
            >
              {copied ? (
                <Check className="size-4" aria-hidden="true" />
              ) : (
                <Copy className="size-4" aria-hidden="true" />
              )}
              {copied ? "Copied" : "Copy"}
            </button>
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="pill-hover inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
