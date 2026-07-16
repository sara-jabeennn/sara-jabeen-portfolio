export type CaseStudyCategory =
  | "Web"
  | "Mobile"
  | "AI/MLOps"
  | "Design/UX"
  | "Systems";

export interface ProjectLinks {
  github?: string;
  demo?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  categories: CaseStudyCategory[];
  featured: boolean;
  dateStart: string;
  dateEnd: string;
  stack: string[];
  links: ProjectLinks;
  caseStudyMdxPath?: string;
}
