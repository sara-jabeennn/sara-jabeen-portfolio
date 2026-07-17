"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search } from "lucide-react";
import type { Project } from "@/types";
import { FilterBar, type ProjectFilter } from "@/components/ui/FilterBar";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ProjectsTiered } from "@/components/sections/ProjectsTiered";

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [query, setQuery] = useState("");
  const prefersReducedMotion = useReducedMotion();
  const isDefaultView = filter === "All" && query.trim().length === 0;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects
      .filter((project) => {
        const matchesCategory =
          filter === "All" || project.categories.includes(filter);
        const matchesQuery =
          q.length === 0 ||
          project.title.toLowerCase().includes(q) ||
          project.stack.some((tech) => tech.toLowerCase().includes(q));
        return matchesCategory && matchesQuery;
      })
      // Featured sorts first (stable sort keeps relative order otherwise).
      .sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [projects, filter, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <FilterBar active={filter} onChange={setFilter} />

        <label className="relative">
          <span className="sr-only">Search projects</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects or stack..."
            className="w-full rounded-full border border-border bg-card py-2 pl-9 pr-4 text-sm outline-none focus:border-primary sm:w-64"
          />
        </label>
      </div>

      {/* Default (no filter/search): the 3-tier hierarchy. Any filter or
          search query switches to the flat animated grid instead - a fixed
          hero/medium/compact layout can't represent an arbitrary subset. */}
      {isDefaultView ? (
        <div className="mt-8">
          <ProjectsTiered projects={projects} />
        </div>
      ) : (
        <>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            {filtered.length} of {projects.length} projects
          </p>

          <motion.div
            layout={!prefersReducedMotion}
            className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence initial={false} mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout={!prefersReducedMotion}
                  initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-sm text-muted-foreground">
              No projects match that filter.
            </p>
          )}
        </>
      )}
    </div>
  );
}
