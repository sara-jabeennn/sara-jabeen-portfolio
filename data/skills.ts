import type { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", simpleIconSlug: "react" },
      { name: "Next.js", simpleIconSlug: "nextdotjs" },
      { name: "TypeScript", simpleIconSlug: "typescript" },
      { name: "Responsive & Accessible UI" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", simpleIconSlug: "nodedotjs" },
      { name: "Express", simpleIconSlug: "express" },
      { name: "NestJS", simpleIconSlug: "nestjs" },
      { name: "REST & API Design" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", simpleIconSlug: "mongodb" },
      { name: "PostgreSQL", simpleIconSlug: "postgresql" },
      { name: "MySQL", simpleIconSlug: "mysql" },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "Kotlin", simpleIconSlug: "kotlin" },
      { name: "Android", simpleIconSlug: "android" },
      { name: "Firebase", simpleIconSlug: "firebase" },
    ],
  },
  {
    category: "DevOps / Tooling",
    skills: [
      { name: "Git", simpleIconSlug: "git" },
      { name: "Docker", simpleIconSlug: "docker" },
      { name: "CI/CD (GitHub Actions)", simpleIconSlug: "githubactions" },
      { name: "AWS", simpleIconSlug: "amazonaws" },
    ],
  },
  {
    category: "AI Integration",
    skills: [
      { name: "LLM / API-Based Features" },
      { name: "MLOps Pipelines (T5, FastAPI, Airflow, Prometheus/Grafana)" },
    ],
  },
  {
    category: "Design",
    skills: [
      { name: "Figma", simpleIconSlug: "figma" },
      { name: "UX Research" },
      { name: "Wireframing to High-Fidelity Prototyping" },
    ],
  },
];
