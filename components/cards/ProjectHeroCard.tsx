import { siGithub } from "simple-icons";
import type { Project } from "@/types";
import { SimpleIconGlyph } from "@/components/icons/SimpleIconGlyph";
import { CardGlow } from "@/components/ui/CardGlow";
import { formatDateRange } from "@/lib/format-date";

// The visually dominant top tier of the Projects hierarchy - QuickAid only.
// Wide, its own row, more body copy and breathing room than anything else on
// the page, per CLAUDE.md's project hierarchy rules.
export function ProjectHeroCard({ project, index }: { project: Project; index: string }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
      <CardGlow color="wine" />
      <div className="relative">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-heading text-2xl italic text-primary">{index}</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary">
            Final Year Project
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {formatDateRange(project.dateStart, project.dateEnd)}
          </span>
        </div>

        <h3 className="mt-5 font-heading text-3xl italic leading-tight sm:text-5xl">
          {project.title}
        </h3>

        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-background px-3 py-1.5 font-mono text-xs text-muted-foreground"
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
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-primary hover:text-primary"
          >
            <SimpleIconGlyph icon={siGithub} className="size-4" />
            View on GitHub
          </a>
        )}
      </div>
    </article>
  );
}
