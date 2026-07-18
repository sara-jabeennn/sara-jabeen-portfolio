import type { ShowcaseEntry } from "@/types";

// All 7 entries confirmed by Sara 2026-07-16 - see CLAUDE.md Content Gap #15
// (resolved) and the certification-vs-coursework rule in "Hard rules".
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
    title: "A+ Grade, FYP",
    description: "Final Year Project, FAST-NUCES",
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
    type: "coursework",
    date: "2026-01",
  },
  {
    id: "ux-engineering-coursework",
    title: "UX Engineering Coursework",
    description:
      "Information architecture, wireframing, prototyping, A/B testing",
    type: "coursework",
    date: "2026-01",
  },
  {
    id: "university-technical-collaboration",
    title: "University Technical Projects & Collaboration",
    description:
      "End-to-end team engineering projects across MLOps, full-stack development, and UX design",
    type: "coursework",
    date: "2026",
  },
];
