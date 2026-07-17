import type { Education } from "@/types";

// Full timeline restored from docs/old-portfolio.html (real content she wrote
// herself, previously trimmed to one entry) - 2026-07-17.
export const education: Education[] = [
  {
    institution: "FAST — National University of Computer & Emerging Sciences",
    degree: "BS Computer Science",
    dateStart: "2021",
    dateEnd: "2026-12",
    status: "in-progress",
    focus: [
      "Mobile App Dev",
      "Web Dev",
      "Data Visualization",
      "MLOps",
      "UX Engineering",
      "Operating Systems",
      "Computer Networks",
      "Software Project Management",
    ],
  },
  {
    institution: "Punjab College for Women, Sargodha",
    degree: "F.Sc.",
    dateStart: "2021",
    dateEnd: "2021",
    status: "complete",
    focus: ["Physics", "Chemistry", "Mathematics"],
  },
  {
    institution: "Comprehensive Girls High School, Sargodha",
    degree: "Matriculation",
    dateStart: "2019",
    dateEnd: "2019",
    status: "complete",
    focus: ["Physics", "Chemistry", "Mathematics", "Biology"],
  },
];
