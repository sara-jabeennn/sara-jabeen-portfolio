export type ShowcaseEntryType =
  | "certification"
  | "achievement"
  | "client-work"
  | "collaboration"
  | "coursework";

export interface ShowcaseEntry {
  id: string;
  title: string;
  description: string;
  type: ShowcaseEntryType;
  /** Not every real credential has a known date - omit rather than invent one. */
  date?: string;
  link?: string;
}
