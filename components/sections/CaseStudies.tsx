import { projects } from "@/data/projects";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectsExplorer } from "@/components/sections/ProjectsExplorer";

export function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="font-heading text-3xl italic">Case Studies</h2>
        </Reveal>
        <div className="mt-8">
          <ProjectsExplorer projects={projects} />
        </div>
      </div>
    </section>
  );
}
