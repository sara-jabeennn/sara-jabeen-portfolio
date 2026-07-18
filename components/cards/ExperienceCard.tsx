import type { Experience } from "@/types";
import { formatDateRange } from "@/lib/format-date";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="card-depth rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-primary/40">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-heading text-lg">{experience.role}</h3>
        <p className="font-mono text-xs uppercase tracking-widest text-primary">
          {formatDateRange(experience.dateStart, experience.dateEnd)}
        </p>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        {experience.organization}
      </p>
      <ul className="mt-4 space-y-2">
        {experience.points.map((point) => (
          <li
            key={point}
            className="border-b border-border pb-2 text-sm leading-relaxed text-muted-foreground last:border-b-0 last:pb-0"
          >
            {point}
          </li>
        ))}
      </ul>
      <ul className="mt-4 flex flex-wrap gap-2">
        {experience.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
