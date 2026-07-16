import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { Reveal } from "@/components/motion/Reveal";
import { EducationCard } from "@/components/cards/EducationCard";
import { AreaOfInterestTag } from "@/components/ui/AreaOfInterestTag";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-heading text-3xl italic">About</h2>
        </Reveal>

        <div className="mt-8 space-y-4">
          {profile.bio.map((paragraph) => (
            <Reveal key={paragraph.slice(0, 24)}>
              <p className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <EducationCard education={education} />
        </Reveal>

        <Reveal className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {profile.areasOfInterest.map((area) => (
              <li key={area}>
                <AreaOfInterestTag label={area} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
