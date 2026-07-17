import type { SkillCategory } from "@/types";
import { SimpleIconGlyph } from "@/components/icons/SimpleIconGlyph";
import { SIMPLE_ICONS } from "@/components/icons/simple-icons-map";
import { CardGlow } from "@/components/ui/CardGlow";
import { CardSheen } from "@/components/ui/CardSheen";

export function SkillGroup({
  group,
  glow = "wine",
}: {
  group: SkillCategory;
  glow?: "wine" | "plum";
}) {
  return (
    <article className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border-2 border-border bg-card p-6 transition-colors hover:border-primary">
      <CardGlow color={glow} />
      <CardSheen />
      <div className="relative flex items-baseline justify-between">
        <h3 className="font-heading text-lg">{group.category}</h3>
        <span className="font-mono text-xs text-muted-foreground">
          {group.skills.length}
        </span>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {group.skills.map((skill) => {
          const icon = skill.simpleIconSlug
            ? SIMPLE_ICONS[skill.simpleIconSlug]
            : undefined;
          return (
            <li
              key={skill.name}
              className="flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
            >
              {icon && <SimpleIconGlyph icon={icon} className="size-3.5" />}
              {skill.name}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
