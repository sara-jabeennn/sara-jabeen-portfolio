import { z } from "zod";

// Source of truth for the contact payload shape - types/contact.ts's
// ContactFormValues is derived from this, not hand-maintained separately.
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Enter a valid email address").max(200),
  message: z.string().trim().min(10, "Message is too short").max(5000),
  // Hidden honeypot field - real visitors never fill it. Optional so the
  // client can omit it entirely; the server checks it if present.
  honeypot: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
