import { experience } from "@/data/experience";
import { Reveal } from "@/components/motion/Reveal";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 relative overflow-hidden bg-card/40 px-6 py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full opacity-15 blur-3xl"
        style={{ background: "var(--color-plum)" }}
      />
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Where I've" accent="worked" tone="plum" />
        </Reveal>

        <div className="mt-14 max-w-3xl space-y-6">
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
