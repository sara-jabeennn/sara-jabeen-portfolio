import { Award, Trophy, BookOpen, Users, Briefcase } from "lucide-react";
import type { ShowcaseEntry as ShowcaseEntryData, ShowcaseEntryType } from "@/types";
import { formatMonthYear } from "@/lib/format-date";

const TYPE_ICON: Record<ShowcaseEntryType, typeof Award> = {
  certification: Award,
  achievement: Trophy,
  coursework: BookOpen,
  collaboration: Users,
  "client-work": Briefcase,
};

const TYPE_LABEL: Record<ShowcaseEntryType, string> = {
  certification: "Certification",
  achievement: "Achievement",
  coursework: "Coursework",
  collaboration: "Collaboration",
  "client-work": "Client Work",
};

export function ShowcaseEntry({ entry }: { entry: ShowcaseEntryData }) {
  const Icon = TYPE_ICON[entry.type];

  return (
    <article className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="size-4" aria-hidden="true" />
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {TYPE_LABEL[entry.type]}
          {entry.date ? ` · ${formatMonthYear(entry.date)}` : ""}
        </p>
        <h3 className="mt-1 font-heading text-base">{entry.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {entry.description}
        </p>
      </div>
    </article>
  );
}
