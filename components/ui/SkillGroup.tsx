import type { SkillCategory } from "@/types";
import { SimpleIconGlyph } from "@/components/icons/SimpleIconGlyph";
import { SIMPLE_ICONS } from "@/components/icons/simple-icons-map";

export function SkillGroup({ group }: { group: SkillCategory }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
      <div className="flex items-baseline justify-between">
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
