import type { Experience } from "@/types";

// One real entry. Not software engineering experience - labeled exactly for
// what it is. Do not pad this list; no other roles exist. See CLAUDE.md
// "Experience" and Content Gap #13. dateStart/dateEnd and the 3-client list
// (Ranklogs, Finocircle, Fitspresso) confirmed against her CV 2026-07-16 -
// Mahamukti Yoga and SlimBoost Tea were never real, removed.
export const experience: Experience[] = [
  {
    id: "freelance-technical-content-writer",
    role: "Freelance Technical Content Writer",
    organization: "International clients (remote)",
    track: "professional",
    dateStart: "2024-09",
    dateEnd: "2025-05",
    location: "Remote",
    points: [
      "Wrote for clients across technology, wellness, finance, and academia: Ranklogs, Finocircle, and Fitspresso.",
      "Produced SEO-optimized articles, technical manuals, and long-form content under deadline-driven, multi-client workloads.",
      "Specialized in technical documentation — translating complex engineering concepts into accessible, reader-friendly content for non-technical audiences.",
    ],
    tags: ["Technical Writing", "SEO", "Client Communication"],
  },
];
