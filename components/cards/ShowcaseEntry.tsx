import { Award, BookOpen, Users, Briefcase } from "lucide-react";
import type { ShowcaseEntry as ShowcaseEntryData, ShowcaseEntryType } from "@/types";
import { formatMonthYear } from "@/lib/format-date";
import { CardGlow } from "@/components/ui/CardGlow";
import { CardSheen } from "@/components/ui/CardSheen";

const TYPE_ICON: Record<ShowcaseEntryType, typeof Award> = {
  certification: Award,
  achievement: Award,
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

// Real emoji per achievement, ported from docs/old-portfolio.html - emoji on
// achievement cards was banned, then explicitly un-banned. See CLAUDE.md
// Decisions Log.
const ACHIEVEMENT_EMOJI: Record<string, string> = {
  "fauji-foundation-scholarship": "🏅",
  "kips-certificate-of-merit": "📜",
  "fyp-1-grade": "⭐",
};

export function ShowcaseEntry({
  entry,
  glow = "wine",
}: {
  entry: ShowcaseEntryData;
  glow?: "wine" | "plum";
}) {
  const Icon = TYPE_ICON[entry.type];
  const isAchievement = entry.type === "achievement";
  const emoji = ACHIEVEMENT_EMOJI[entry.id];

  if (isAchievement) {
    return (
      <article className="card-depth group relative overflow-hidden rounded-2xl border-2 border-primary/30 bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-[color-mix(in_oklab,var(--color-wine)_25%,transparent)]">
        <CardGlow color={glow} />
        <CardSheen />
        <div className="relative">
          <span className="text-5xl" aria-hidden="true">
            {emoji ?? "🏆"}
          </span>
          <h3 className="mt-3 font-heading text-base">{entry.title}</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            {entry.description}
            {entry.date ? ` · ${formatMonthYear(entry.date)}` : ""}
          </p>
        </div>
      </article>
    );
  }

  // Coursework / certification / collaboration - deliberately quieter than
  // achievement cards: no glow, no emoji, smaller icon. Still gets the sheen
  // and an accent border-brighten on hover per the "every card" rule, just
  // without the loud glow/emoji treatment that would blur the hierarchy.
  return (
    <article className="card-depth group relative overflow-hidden rounded-xl border-2 border-border/50 bg-card/50 p-4 transition-colors hover:border-primary/60">
      <CardSheen />
      <div className="relative flex items-start gap-4">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
          <Icon className="size-3.5" aria-hidden="true" />
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {TYPE_LABEL[entry.type]}
            {entry.date ? ` · ${formatMonthYear(entry.date)}` : ""}
          </p>
          <h3 className="mt-1 text-sm font-medium">{entry.title}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{entry.description}</p>
        </div>
      </div>
    </article>
  );
}
