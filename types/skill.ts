export interface Skill {
  name: string;
  simpleIconSlug?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}
