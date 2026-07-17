import { siGithub } from "simple-icons";
import type { Project } from "@/types";
import { SimpleIconGlyph } from "@/components/icons/SimpleIconGlyph";
import { CardGlow } from "@/components/ui/CardGlow";

// Middle tier of the Projects hierarchy - the other 2 featured projects
// (02, 03). Clearly smaller than ProjectHeroCard, clearly bigger than
// ProjectCompactCard.
export function ProjectMediumCard({
  project,
  index,
  glow = "plum",
}: {
  project: Project;
  index: string;
  glow?: "wine" | "plum";
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6">
      <CardGlow color={glow} />
      <div className="relative flex flex-1 flex-col">
        <span className="font-heading text-lg italic text-primary">{index}</span>
        <h3 className="mt-2 font-heading text-xl">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
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
      </div>
    </article>
  );
}
