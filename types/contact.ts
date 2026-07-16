// Interim manual shape. Once feature/contact-api lands, `lib/schemas/contact.ts`
// becomes the source of truth and this becomes `type ContactFormValues =
// z.infer<typeof contactSchema>` instead of a hand-written interface.
export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}

export interface ContactApiResponse {
  ok: boolean;
  error?: string;
}
