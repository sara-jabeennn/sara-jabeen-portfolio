import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/cards/ProjectCard";

const featured = projects.filter((project) => project.featured);

export function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <Reveal>
            <h2 className="font-heading text-3xl italic">Featured Projects</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2"
            >
              View all projects
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
