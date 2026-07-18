"use client";

import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { contactSchema, type ContactFormValues } from "@/lib/schemas/contact";
import { Button } from "@/components/ui/button";
import { GlowRing } from "@/components/ui/GlowRing";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    // @hookform/resolvers 5.4.0's zod types hardcode compatibility with
    // zod's internal `_zod.version.minor` literal at exactly 0 - any zod 4.x
    // release newer than 4.0.0 (we're on 4.4.3) fails this purely type-level
    // check even though the runtime validation behavior is unaffected. Cast
    // through `unknown` (not `any`) rather than relax the schema's own type.
    resolver: zodResolver(
      contactSchema as unknown as Parameters<typeof zodResolver>[0]
    ) as unknown as Resolver<ContactFormValues>,
    defaultValues: { name: "", email: "", message: "", honeypot: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const result = (await response.json()) as { ok: boolean; error?: string };

    if (!result.ok) {
      toast.error(result.error ?? "Something went wrong. Try again later.");
      return;
    }

    toast.success("Message sent - thanks for reaching out.");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot - hidden from real visitors via CSS, not display:none (some
          bots skip hidden fields), never focusable. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="contact-honeypot">Leave this field empty</label>
        <input
          id="contact-honeypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("honeypot")}
        />
      </div>

      <div>
        <Label htmlFor="contact-name">Name</Label>
        <Input
          id="contact-name"
          className="mt-1.5"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          {...register("name")}
        />
        {errors.name && (
          <p id="contact-name-error" className="mt-1 text-sm text-destructive">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          type="email"
          className="mt-1.5"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p id="contact-email-error" className="mt-1 text-sm text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          rows={5}
          className="mt-1.5"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1 text-sm text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="group relative inline-flex w-full sm:w-auto">
        <GlowRing />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="relative w-full transition-transform hover:scale-[1.03] motion-reduce:hover:scale-100 sm:w-auto"
        >
          {isSubmitting ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="size-4" aria-hidden="true" />
          )}
          {isSubmitting ? "Sending..." : "Send message"}
        </Button>
      </div>
    </form>
  );
}
