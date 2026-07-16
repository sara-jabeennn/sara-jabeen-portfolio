import type { ShowcaseEntry } from "@/types";

// Carried forward from docs/old-portfolio.html per CLAUDE.md Content Gap #15 -
// proceeding on the standing reuse note, flagged there in case that's wrong.
export const showcase: ShowcaseEntry[] = [
  {
    id: "fauji-foundation-scholarship",
    title: "Scholarship Recipient",
    description: "Fauji Foundation Pakistan",
    type: "achievement",
    date: "2019",
  },
  {
    id: "kips-certificate-of-merit",
    title: "Certificate of Merit",
    description: "KIPS Academy",
    type: "achievement",
    date: "2020",
  },
  {
    id: "fyp-1-grade",
    title: "A+ Grade, FYP-1",
    description: "Final Year Project Phase 1, FAST-NUCES",
    type: "achievement",
    date: "2025",
  },
  {
    id: "coursera-charts-dashboards",
    title: "Create Charts and Dashboards using Google Sheets",
    description: "Coursera Project Certificate",
    type: "certification",
    date: "2021-10",
  },
  {
    id: "mlops-intensive-coursework",
    title: "MLOps Intensive Coursework",
    description:
      "CI/CD pipelines, Docker, Kubernetes, monitoring, workflow orchestration",
    type: "certification",
  },
  {
    id: "ux-engineering-coursework",
    title: "UX Engineering Coursework",
    description:
      "Information architecture, wireframing, prototyping, A/B testing",
    type: "certification",
  },
  {
    id: "university-technical-collaboration",
    title: "University Technical Projects & Collaboration",
    description:
      "End-to-end team engineering projects across MLOps, full-stack development, and UX design",
    type: "collaboration",
  },
];
