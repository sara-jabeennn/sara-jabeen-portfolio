export type ShowcaseEntryType = "certification" | "achievement" | "client-work" | "collaboration";

export interface ShowcaseEntry {
  id: string;
  title: string;
  description: string;
  type: ShowcaseEntryType;
  date: string;
  link?: string;
}
