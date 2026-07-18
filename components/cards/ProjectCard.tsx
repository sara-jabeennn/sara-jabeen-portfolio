import { siGithub } from "simple-icons";
import type { Project } from "@/types";
import { SimpleIconGlyph } from "@/components/icons/SimpleIconGlyph";
import { CardSheen } from "@/components/ui/CardSheen";
import { formatDateRange } from "@/lib/format-date";

export function ProjectCard({ project }: { project: Project }) {
  const dateRange = formatDateRange(project.dateStart, project.dateEnd);

  return (
    <article className="card-depth group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-[color-mix(in_oklab,var(--color-wine)_25%,transparent)]">
      {/* Diagonal gradient sweep, ported from docs/old-portfolio.html's
          .project-card::before (~line 176), plus a sheen pass on top. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:hidden"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--color-wine) 10%, transparent), transparent)",
        }}
      />
      <CardSheen />

      {dateRange && (
        <p className="relative font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {dateRange}
        </p>
      )}

      <h3 className="relative mt-3 font-heading text-lg">{project.title}</h3>

      <ul className="relative mt-2 flex flex-wrap gap-1.5">
        {project.categories.map((category) => (
          <li
            key={category}
            className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground"
          >
            {category}
          </li>
        ))}
      </ul>

      {/* Guard, not fabricate: a project with a flagged-pending summary (see
          CLAUDE.md Content Gaps) must never leak its internal TODO note to a
          visitor via the flat filtered/search grid - omit the paragraph
          entirely rather than render placeholder text. */}
      {!project.summary.startsWith("TODO(") && (
        <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
      )}

      <ul className="relative mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="pill-hover rounded-md border border-transparent bg-background px-2 py-1 font-mono text-xs text-muted-foreground"
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
          className="relative mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
        >
          <SimpleIconGlyph icon={siGithub} className="size-4" />
          View on GitHub
        </a>
      )}
    </article>
  );
}
