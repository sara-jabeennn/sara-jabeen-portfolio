export type CaseStudyCategory =
  | "Web"
  | "Mobile"
  | "AI/MLOps"
  | "Design/UX"
  | "Systems";

// "hero" = QuickAid only, big asymmetric card, its own row.
// "prominent" = the rest of the "Work I'm proud of" 6-card row.
// "compact" = the "More Projects" grid.
// See CLAUDE.md's "Project hierarchy".
export type ProjectVisualTier = "hero" | "prominent" | "compact";

export interface ProjectLinks {
  github?: string;
  demo?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  categories: CaseStudyCategory[];
  visualTier: ProjectVisualTier;
  /** Omitted rather than guessed when the real date isn't known yet. */
  dateStart?: string;
  dateEnd?: string;
  stack: string[];
  links: ProjectLinks;
}
