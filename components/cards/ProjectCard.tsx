import { Star } from "lucide-react";
import { siGithub } from "simple-icons";
import type { Project } from "@/types";
import { SimpleIconGlyph } from "@/components/icons/SimpleIconGlyph";
import { formatDateRange } from "@/lib/format-date";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
      {/* Diagonal gradient sweep on hover, ported from
          docs/old-portfolio.html's .project-card::before (~line 176). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--color-wine) 10%, transparent), transparent)",
        }}
      />

      <div className="relative flex items-start justify-between gap-2">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {formatDateRange(project.dateStart, project.dateEnd)}
        </p>
        {project.featured && (
          <span className="flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary">
            <Star className="size-3" aria-hidden="true" />
            Featured
          </span>
        )}
      </div>

      <h3 className="mt-3 font-heading text-lg">{project.title}</h3>

      <ul className="mt-2 flex flex-wrap gap-1.5">
        {project.categories.map((category) => (
          <li
            key={category}
            className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground"
          >
            {category}
          </li>
        ))}
      </ul>

      <p className="mt-3 flex-1 text-sm text-muted-foreground">
        {project.summary}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-background px-2 py-1 font-mono text-xs text-muted-foreground"
          >
            {tech}
          </li>
        ))}
      </ul>

      {project.links.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
        >
          <SimpleIconGlyph icon={siGithub} className="size-4" />
          View on GitHub
        </a>
      )}
    </article>
  );
}
