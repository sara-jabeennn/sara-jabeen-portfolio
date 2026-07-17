import type { SkillCategory } from "@/types";

// Replaced 2026-07-18 with her actual categories from docs/old-portfolio.html
// (real content, previously overwritten with an invented 7-category set).
// Java, SQL, SQL Server, Canva, Adobe Photoshop, and Pencil have no simple-icons
// glyph in this version (checked 2026-07-18, genuinely absent, same pattern
// as AWS/LinkedIn) - they render text-only.
export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", simpleIconSlug: "python" },
      { name: "JavaScript", simpleIconSlug: "javascript" },
      { name: "Java" },
      { name: "C++", simpleIconSlug: "cplusplus" },
      { name: "SQL" },
      { name: "HTML", simpleIconSlug: "html5" },
      { name: "CSS", simpleIconSlug: "css" },
    ],
  },
  {
    category: "Frontend & Mobile",
    skills: [
      { name: "React.js", simpleIconSlug: "react" },
      { name: "Next.js", simpleIconSlug: "nextdotjs" },
      { name: "TypeScript", simpleIconSlug: "typescript" },
      { name: "Android Studio", simpleIconSlug: "androidstudio" },
      { name: "Kotlin", simpleIconSlug: "kotlin" },
      { name: "Firebase", simpleIconSlug: "firebase" },
      { name: "Responsive & Accessible UI" },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js", simpleIconSlug: "nodedotjs" },
      { name: "Express.js", simpleIconSlug: "express" },
      { name: "FastAPI", simpleIconSlug: "fastapi" },
      { name: "Flask", simpleIconSlug: "flask" },
      { name: "RESTful APIs" },
    ],
  },
  {
    category: "MLOps & AI",
    skills: [
      { name: "MLflow", simpleIconSlug: "mlflow" },
      { name: "DVC", simpleIconSlug: "dvc" },
      { name: "Apache Airflow", simpleIconSlug: "apacheairflow" },
      { name: "Prometheus", simpleIconSlug: "prometheus" },
      { name: "Grafana", simpleIconSlug: "grafana" },
      { name: "Scikit-learn", simpleIconSlug: "scikitlearn" },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker", simpleIconSlug: "docker" },
      { name: "Kubernetes", simpleIconSlug: "kubernetes" },
      { name: "Jenkins", simpleIconSlug: "jenkins" },
      { name: "GitHub Actions", simpleIconSlug: "githubactions" },
      { name: "AWS EKS" },
      { name: "Git", simpleIconSlug: "git" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", simpleIconSlug: "mongodb" },
      { name: "MySQL", simpleIconSlug: "mysql" },
      { name: "SQL Server" },
      { name: "PostgreSQL", simpleIconSlug: "postgresql" },
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
      { name: "draw.io", simpleIconSlug: "diagramsdotnet" },
      { name: "Pencil" },
      { name: "Proteus", simpleIconSlug: "proteus" },
      { name: "UML", simpleIconSlug: "uml" },
      { name: "Canva" },
      { name: "Adobe Photoshop" },
      { name: "UX Research" },
      { name: "Wireframing to High-Fidelity Prototyping" },
    ],
  },
];
