import { skills } from "@/data/skills";
import { Reveal } from "@/components/motion/Reveal";
import { SkillGroup } from "@/components/ui/SkillGroup";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Varies card width so the grid isn't seven identical boxes - the two
// densest categories (most real skills listed) get the wide treatment.
const WIDE_CATEGORIES = new Set(["Frontend", "DevOps / Tooling"]);

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-card/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading eyebrow="Technical Skills" title="The tools I" accent="master" />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal
              key={group.category}
              delay={index * 0.05}
              className={WIDE_CATEGORIES.has(group.category) ? "lg:col-span-2" : ""}
            >
              <SkillGroup group={group} glow={index % 2 === 0 ? "wine" : "plum"} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
