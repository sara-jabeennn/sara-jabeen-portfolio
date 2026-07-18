import { experience } from "@/data/experience";
import { Reveal } from "@/components/motion/Reveal";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-card/40 px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Where I've" accent="worked" tone="plum" />
        </Reveal>

        <div className="mt-8 space-y-6">
          {experience.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.05}>
              <ExperienceCard experience={entry} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
