import type { Project } from "@/types";

// Bottom tier - "MORE PROJECTS": title, stack line, index, nothing more.
// Deliberately minimal so the top two tiers keep the visual weight.
export function ProjectCompactCard({ project, index }: { project: Project; index: string }) {
  return (
    <article className="rounded-xl border border-border bg-card/60 p-4 transition-colors hover:border-primary/40">
      <div className="flex items-baseline justify-between gap-2">
        <h4 className="text-sm font-medium">{project.title}</h4>
        <span className="font-mono text-xs text-muted-foreground">{index}</span>
      </div>
      <p className="mt-1 font-mono text-xs text-muted-foreground">
        {project.stack.slice(0, 3).join(" · ")}
      </p>
    </article>
  );
}
