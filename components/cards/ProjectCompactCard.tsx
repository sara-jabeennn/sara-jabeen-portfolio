import { siGithub } from "simple-icons";
import type { Project } from "@/types";
import { SimpleIconGlyph } from "@/components/icons/SimpleIconGlyph";
import { CardSheen } from "@/components/ui/CardSheen";

// Bottom tier - "MORE PROJECTS": title, stack line, index, nothing more,
// except a small GitHub link when a real repo exists.
export function ProjectCompactCard({ project, index }: { project: Project; index: string }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border-2 border-border bg-card/60 p-4 transition-colors hover:border-primary/70">
      <CardSheen />
      <div className="relative flex items-baseline justify-between gap-2">
        <h4 className="text-sm font-medium">{project.title}</h4>
        <span className="font-mono text-xs text-muted-foreground">{index}</span>
      </div>
      <p className="relative mt-1 font-mono text-xs text-muted-foreground">
        {project.stack.slice(0, 3).join(" · ")}
      </p>
      {project.links.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
          className="relative mt-2 inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
        >
          <SimpleIconGlyph icon={siGithub} className="size-3.5" />
          GitHub
        </a>
      )}
    </article>
  );
}
