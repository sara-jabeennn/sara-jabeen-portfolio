import { projects } from "@/data/projects";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectsExplorer } from "@/components/sections/ProjectsExplorer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-20 px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading eyebrow="Case Studies" title="Work I'm" accent="proud of" />
        </Reveal>
        <div className="mt-8">
          <ProjectsExplorer projects={projects} />
        </div>
      </div>
    </section>
  );
}
