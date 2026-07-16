// lib/schemas/contact.ts is the source of truth now that feature/contact-api
// has landed - re-exported here so `@/types` stays the single import surface
// for the rest of the app.
export type { ContactFormValues } from "@/lib/schemas/contact";

export interface ContactApiResponse {
  ok: boolean;
  error?: string;
}
