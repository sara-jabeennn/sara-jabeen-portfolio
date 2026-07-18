import { siGithub } from "simple-icons";
import type { Project } from "@/types";
import { SimpleIconGlyph } from "@/components/icons/SimpleIconGlyph";
import { CardSheen } from "@/components/ui/CardSheen";

// Bottom tier - "MORE PROJECTS": title, stack line, index, nothing more,
// except a small GitHub link when a real repo exists. `h-full` + flex-col
// (matching ProjectMediumCard's pattern) so every card in the grid row
// stretches to equal height regardless of stack-line length or whether the
// GitHub link is present - the grid row itself was already equal-height via
// default stretch alignment, but the article's own border box wasn't
// filling it.
export function ProjectCompactCard({ project, index }: { project: Project; index: string }) {
  return (
    <article className="card-depth group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/70">
      <CardSheen />
      <div className="relative flex flex-1 flex-col">
        <div className="flex items-baseline justify-between gap-2">
          <h4 className="text-sm font-medium">{project.title}</h4>
          <span className="font-mono text-xs text-muted-foreground">{index}</span>
        </div>
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          {project.stack.slice(0, 3).join(" · ")}
        </p>
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex w-fit items-center gap-1.5 pt-2 text-xs text-primary transition-transform hover:scale-105 hover:underline motion-reduce:hover:scale-100"
          >
            <SimpleIconGlyph icon={siGithub} className="size-3.5" />
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
