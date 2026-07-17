import type { StatItem } from "@/types";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { education } from "@/data/education";

// Projects and Tech Stacks are derived from the actual data, not hardcoded -
// they can never silently drift out of sync with the real roster/skill list.
// Years Study is computed from her degree's actual start year. Freelance
// Clients (3, matching her CV-confirmed client list) is the one genuinely
// fixed fact here - there's no meaningful array to derive it from without
// adding a dedicated clients field for a single stable number.
//
// Exact numbers everywhere, no "+" suffixes - every stat here is directly
// verifiable by counting what's on the page. Recomputed 2026-07-18 against
// the new 11-project, 8-category data (previously 9/7).
const yearsStudy = new Date().getFullYear() - Number(education[0].dateStart);

export const stats: StatItem[] = [
  { label: "Projects", value: projects.length },
  { label: "Years Study", value: yearsStudy },
  { label: "Tech Stacks", value: skills.length },
  { label: "Freelance Clients", value: 3 },
];
