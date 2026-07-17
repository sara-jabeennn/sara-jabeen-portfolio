import { skills } from "@/data/skills";
import { Reveal } from "@/components/motion/Reveal";
import { SkillGroup } from "@/components/ui/SkillGroup";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-card/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading eyebrow="Technical Skills" title="The tools I" accent="master" tone="plum" />
        </Reveal>

        {/* CSS columns (not a uniform grid) so cards of different heights
            flow tightly with no orphan rows/dead space - each category's
            own real skill count naturally varies its height. */}
        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.05}>
              <SkillGroup group={group} glow={index % 2 === 0 ? "wine" : "plum"} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
