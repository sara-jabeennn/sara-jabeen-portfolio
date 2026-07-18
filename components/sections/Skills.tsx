import { skills } from "@/data/skills";
import { Reveal } from "@/components/motion/Reveal";
import { SkillGroup } from "@/components/ui/SkillGroup";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-card/40 px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading eyebrow="Technical Skills" title="The tools I" accent="master" tone="plum" />
        </Reveal>

        {/* Equal-height grid, not CSS columns - reviewer flagged the previous
            masonry-style columns layout for producing visibly uneven card
            heights across the row. Each Reveal wrapper stretches to the row
            height (grid's default align-items: stretch) and SkillGroup fills
            it with h-full, so every card in a row matches regardless of how
            many skills its category lists. */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.05} className="h-full">
              <SkillGroup group={group} glow={index % 2 === 0 ? "wine" : "plum"} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
