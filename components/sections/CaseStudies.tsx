import { projects } from "@/data/projects";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectsExplorer } from "@/components/sections/ProjectsExplorer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-20 relative overflow-hidden px-6 py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 size-[28rem] rounded-full opacity-12 blur-3xl"
        style={{ background: "var(--color-wine)" }}
      />
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading eyebrow="Case Studies" title="Work I'm" accent="proud of" />
        </Reveal>
        <div className="mt-14">
          <ProjectsExplorer projects={projects} />
        </div>
      </div>
    </section>
  );
}
