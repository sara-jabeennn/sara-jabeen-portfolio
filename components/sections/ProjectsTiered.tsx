import type { Project } from "@/types";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectHeroCard } from "@/components/cards/ProjectHeroCard";
import { ProjectMediumCard } from "@/components/cards/ProjectMediumCard";
import { ProjectCompactCard } from "@/components/cards/ProjectCompactCard";

// Three visual tiers, matching docs/old-portfolio.html's hierarchy rather
// than a uniform grid: QuickAid dominates, the other 2 featured projects are
// medium, the rest are compact. This is the default view - filtering or
// searching (see ProjectsExplorer) switches to the flat animated grid
// instead, since a fixed hierarchy can't represent an arbitrary filtered set.
export function ProjectsTiered({ projects }: { projects: Project[] }) {
  const [hero, ...rest] = projects.filter((p) => p.featured);
  const medium = rest;
  const compact = projects.filter((p) => !p.featured);

  return (
    <div className="space-y-4">
      {hero && (
        <Reveal>
          <ProjectHeroCard project={hero} index="01" />
        </Reveal>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {medium.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <ProjectMediumCard
              project={project}
              index={String(i + 2).padStart(2, "0")}
              glow={i % 2 === 0 ? "plum" : "wine"}
            />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <p className="pt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="mr-3 inline-block h-px w-8 bg-primary align-middle" aria-hidden="true" />
          More Projects
        </p>
      </Reveal>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {compact.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.03}>
            <ProjectCompactCard
              project={project}
              index={String(i + 2 + medium.length).padStart(2, "0")}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
