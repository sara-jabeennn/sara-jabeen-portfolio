export type ExperienceTrack = "professional" | "academic";

export interface Experience {
  id: string;
  role: string;
  organization: string;
  track: ExperienceTrack;
  dateStart: string;
  dateEnd: string | "present";
  location?: string;
  points: string[];
  tags: string[];
}
