import type { ReactNode } from "react";

// Section eyebrow (rule + mono uppercase label) + heading with an italic
// Playfair accent on the closing phrase, ported from docs/old-portfolio.html's
// .section-label / .section-title pattern.
export function SectionHeading({
  eyebrow,
  title,
  accent,
}: {
  eyebrow: string;
  title: string;
  accent: ReactNode;
}) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary">
        <span className="h-px w-8 bg-primary" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2 className="font-heading text-3xl leading-tight sm:text-4xl">
        {title} <em className="italic text-primary">{accent}</em>
      </h2>
    </div>
  );
}
