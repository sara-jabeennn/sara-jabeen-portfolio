"use client";

const FILTERS = ["All", "Web", "Mobile", "AI/MLOps", "Design/UX", "Systems"] as const;

export type ProjectFilter = (typeof FILTERS)[number];

export function FilterBar({
  active,
  onChange,
}: {
  active: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
}) {
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
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
