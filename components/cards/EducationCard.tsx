import type { Education } from "@/types";
import { formatMonthYear } from "@/lib/format-date";

function formatRange(edu: Education) {
  if (edu.dateStart === edu.dateEnd) return edu.dateStart;
  if (edu.status === "in-progress") {
    return `${edu.dateStart} — Expected ${formatMonthYear(edu.dateEnd)}`;
  }
  return `${edu.dateStart} — ${edu.dateEnd}`;
}

export function EducationCard({ education }: { education: Education }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">
        {formatRange(education)}
      </p>
      <h3 className="mt-2 font-heading text-base leading-snug">
        {education.institution}
      </h3>
      <p className="text-sm text-muted-foreground">{education.degree}</p>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
        {education.focus.join(" · ")}
      </p>
    </article>
  );
}
