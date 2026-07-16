import { skills } from "@/data/skills";
import { Reveal } from "@/components/motion/Reveal";
import { SkillGroup } from "@/components/ui/SkillGroup";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="font-heading text-3xl italic">Skills</h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.05}>
              <SkillGroup group={group} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
