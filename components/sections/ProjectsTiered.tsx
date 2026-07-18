import type { Project } from "@/types";
import { Reveal } from "@/components/motion/Reveal";
import { CardReveal } from "@/components/motion/CardReveal";
import { ProjectHeroCard } from "@/components/cards/ProjectHeroCard";
import { ProjectMediumCard } from "@/components/cards/ProjectMediumCard";
import { ProjectCompactCard } from "@/components/cards/ProjectCompactCard";

// Three visual tiers, matching docs/old-portfolio.html's hierarchy rather
// than a uniform grid, driven by `visualTier` - see CLAUDE.md's "Project
// hierarchy". This is the default view - filtering or searching (see
// ProjectsExplorer) switches to the flat animated grid instead, since a
// fixed hierarchy can't represent an arbitrary filtered set.
export function ProjectsTiered({ projects }: { projects: Project[] }) {
  const hero = projects.find((p) => p.visualTier === "hero");
  const prominent = projects.filter((p) => p.visualTier === "prominent");
  const compact = projects.filter((p) => p.visualTier === "compact");

  return (
    <div className="space-y-10">
      {hero && (
        <Reveal>
          <ProjectHeroCard project={hero} index="01" />
        </Reveal>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {prominent.map((project, i) => (
          <CardReveal key={project.slug} delay={i * 0.06}>
            <ProjectMediumCard
              project={project}
              index={String(i + 2).padStart(2, "0")}
              glow={i % 2 === 0 ? "plum" : "wine"}
            />
          </CardReveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <p className="pt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="mr-3 inline-block h-px w-8 bg-primary align-middle" aria-hidden="true" />
          More Projects
        </p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {compact.map((project, i) => (
          <CardReveal key={project.slug} delay={i * 0.04}>
            <ProjectCompactCard
              project={project}
              index={String(i + 2 + prominent.length).padStart(2, "0")}
            />
          </CardReveal>
        ))}
      </div>
    </div>
  );
}
