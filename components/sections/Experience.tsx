import { experience } from "@/data/experience";
import { Reveal } from "@/components/motion/Reveal";
import { ExperienceCard } from "@/components/cards/ExperienceCard";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-card/40 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-heading text-3xl italic">Experience</h2>
        </Reveal>

        <div className="mt-8 space-y-6">
          {experience.map((entry) => (
            <Reveal key={entry.id}>
              <ExperienceCard experience={entry} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
