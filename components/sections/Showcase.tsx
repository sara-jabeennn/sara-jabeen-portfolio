import { showcase } from "@/data/showcase";
import { Reveal } from "@/components/motion/Reveal";
import { ShowcaseEntry } from "@/components/cards/ShowcaseEntry";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Showcase() {
  const achievements = showcase.filter((entry) => entry.type === "achievement");
  const rest = showcase.filter((entry) => entry.type !== "achievement");

  return (
    <section id="showcase" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading
            eyebrow="Achievements & Certifications"
            title="Recognition &"
            accent="growth"
          />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {achievements.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.05}>
              <ShowcaseEntry entry={entry} glow={index % 2 === 0 ? "wine" : "plum"} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mb-4 mt-10 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Certifications & Coursework
          </p>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {rest.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.04}>
              <ShowcaseEntry entry={entry} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
