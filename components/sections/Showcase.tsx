import { showcase } from "@/data/showcase";
import { Reveal } from "@/components/motion/Reveal";
import { ShowcaseEntry } from "@/components/cards/ShowcaseEntry";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Showcase() {
  const achievements = showcase.filter((entry) => entry.type === "achievement");
  const rest = showcase.filter((entry) => entry.type !== "achievement");

  return (
    <section id="showcase" className="scroll-mt-20 relative overflow-hidden px-6 py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 size-[28rem] rounded-full opacity-12 blur-3xl"
        style={{ background: "var(--color-wine)" }}
      />
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Achievements & Certifications"
            title="Recognition &"
            accent="growth"
          />
        </Reveal>

        <div className="mt-14 grid items-stretch gap-5 sm:grid-cols-3">
          {achievements.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.05} className="h-full">
              <ShowcaseEntry entry={entry} glow={index % 2 === 0 ? "wine" : "plum"} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mb-5 mt-14 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Certifications & Coursework
          </p>
        </Reveal>

        <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.04} className="h-full">
              <ShowcaseEntry entry={entry} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
