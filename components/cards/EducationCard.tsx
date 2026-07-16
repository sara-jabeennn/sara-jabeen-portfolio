import type { Education } from "@/types";

export function EducationCard({ education }: { education: Education }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">
        {education.dateStart} – {education.dateEnd}
        {education.status === "complete" ? " · Complete" : " · In Progress"}
      </p>
      <h3 className="mt-2 font-heading text-lg">{education.institution}</h3>
      <p className="text-sm text-muted-foreground">{education.degree}</p>
      <p className="mt-3 text-sm text-muted-foreground">
        {education.focus.join(" · ")}
      </p>
    </article>
  );
}
