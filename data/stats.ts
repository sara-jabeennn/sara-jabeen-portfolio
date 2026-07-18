import type { StatItem } from "@/types";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

// Projects and Tech Stacks are derived from the actual data, not hardcoded -
// they can never silently drift out of sync with the real roster/skill list.
// Freelance Clients (3, matching her CV-confirmed client list) is the one
// genuinely fixed fact here - there's no meaningful array to derive it from
// without adding a dedicated clients field for a single stable number.
//
// "Years Study" was dropped 2026-07-18 (session, reviewer feedback) - a
// standalone years-in-school metric read junior next to a completed FYP.
// The 2021-2026 timeline still lives on the education card, just not as a
// hero stat. Clean 3-stat row instead of rebalancing with an invented
// number.
//
// Exact numbers everywhere, no "+" suffixes - every stat here is directly
// verifiable by counting what's on the page.
export const stats: StatItem[] = [
  { label: "Projects", value: projects.length },
  { label: "Tech Stacks", value: skills.length },
  { label: "Freelance Clients", value: 3 },
];
