export type CaseStudyCategory =
  | "Web"
  | "Mobile"
  | "AI/MLOps"
  | "Design/UX"
  | "Systems";

// "hero" = QuickAid only, big asymmetric card, its own row.
// "prominent" = the rest of the "Work I'm proud of" 6-card row.
// "compact" = the "More Projects" grid.
// Deliberately independent of `featured` - visual prominence and having an
// MDX case study are two different things. SmartWait is a case study
// (featured: true) but visually compact; Fake News Detection is visually
// prominent but has no case study. See CLAUDE.md's "Project hierarchy".
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
  /** Has (or will have) an MDX case study. Exactly 3: QuickAid, E-Commerce Ad
   * Creative Generator, SmartWait. Not a visual-prominence signal - see
   * `visualTier` for that. */
  featured: boolean;
  visualTier: ProjectVisualTier;
  /** Omitted rather than guessed when the real date isn't known yet. */
  dateStart?: string;
  dateEnd?: string;
  stack: string[];
  links: ProjectLinks;
  caseStudyMdxPath?: string;
}
