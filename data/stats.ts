import type { StatItem } from "@/types";

// "Years Building" = earliest project's dateStart (Advanced Classroom
// Management System, 2023-06) to today, not to the latest project's
// dateEnd - a "years of experience" stat should keep counting, not freeze
// at whatever the most recent listed project happened to end. As of
// 2026-07-16 that's ~3 years 1 month, honestly rounds to "3+", not the
// previous "2+" (which undercounted) or a rounded-up "4+" (which would
// overstate it). Recompute this by hand if it goes stale - it is not
// derived from data/projects.ts automatically. Rechecked 2026-07-16 after
// the graduation-status correction: this stat was never tied to degree
// status, only to project timeline, so it needed no change.
export const stats: StatItem[] = [
  { label: "Projects Shipped", value: 9 },
  { label: "Skill Categories", value: 7 },
  { label: "Years Building", value: 3, suffix: "+" },
];
