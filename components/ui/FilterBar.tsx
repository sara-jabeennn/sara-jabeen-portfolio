"use client";

import { motion, useReducedMotion } from "framer-motion";

const FILTERS = ["All", "Web", "Mobile", "AI/MLOps", "Design/UX", "Systems"] as const;

export type ProjectFilter = (typeof FILTERS)[number];

export function FilterBar({
  active,
  onChange,
}: {
  active: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
      {FILTERS.map((filter) => {
        const isActive = filter === active;
        return (
          <button
            key={filter}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(filter)}
            className={`relative rounded-full border px-4 py-1.5 text-sm transition-colors ${
              isActive
                ? "border-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 z-0 rounded-full bg-primary"
                transition={
                  prefersReducedMotion ? { duration: 0 } : { type: "spring", bounce: 0.2, duration: 0.5 }
                }
              />
            )}
            <span className="relative z-10">{filter}</span>
          </button>
        );
      })}
    </div>
  );
}
