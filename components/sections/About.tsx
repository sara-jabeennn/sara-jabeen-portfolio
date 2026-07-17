import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { showcase } from "@/data/showcase";
import { Reveal } from "@/components/motion/Reveal";
import { EducationCard } from "@/components/cards/EducationCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { boldPhrases } from "@/lib/bold-phrases";

const BOLD_PHRASES = [
  "FAST NUCES Islamabad",
  "intelligent systems",
  "great user experiences",
  "9 projects",
];

const scholarship = showcase.find((e) => e.id === "fauji-foundation-scholarship");
const fyp1 = showcase.find((e) => e.id === "fyp-1-grade");
const freelanceRole = experience[0];

const CALLOUTS = [
  {
    emoji: "🎓",
    label: "Institution",
    value: `FAST-NUCES Islamabad · ${education[0].degree}`,
  },
  {
    emoji: "🏆",
    label: "Achievement",
    value: `${fyp1?.title ?? "A+ Grade, FYP-1"} · ${scholarship?.title ?? "Scholarship Recipient"}`,
  },
  {
    emoji: "📍",
    label: "Location",
    value: profile.location,
  },
  {
    emoji: "✍️",
    label: "Freelance",
    value: freelanceRole
      ? `${freelanceRole.tags[0]} · ${freelanceRole.points[0].split(":")[1]?.trim() ?? freelanceRole.organization}`
      : "",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="About Me"
            title="Building things that"
            accent="matter"
          />
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="space-y-4">
              {profile.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="leading-relaxed text-muted-foreground">
                  {boldPhrases(paragraph, BOLD_PHRASES)}
                </p>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {CALLOUTS.map((callout) => (
                <div
                  key={callout.label}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                >
                  <span className="text-xl" aria-hidden="true">
                    {callout.emoji}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {callout.label}
                    </p>
                    <p className="mt-0.5 text-sm">{callout.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Education
            </p>
            <div className="space-y-3">
              {education.map((entry) => (
                <EducationCard key={entry.institution} education={entry} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
