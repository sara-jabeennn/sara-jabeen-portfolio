"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Section eyebrow (rule + mono uppercase label) + heading with an italic
// Playfair accent on the closing phrase, ported from docs/old-portfolio.html's
// .section-label / .section-title pattern. The rule draws left-to-right and
// the accent word fades in just after the rest of the heading, both on
// scroll-into-view, both static under prefers-reduced-motion.
//
// `tone` (2026-07-19) drives a soft radial glow anchored behind the heading,
// offset up-left, low opacity - breaks up the flat background the same way
// CardGlow does for cards. Callers alternate wine/plum per section, same
// pattern as CardGlow's per-card alternation.
export function SectionHeading({
  eyebrow,
  title,
  accent,
  tone = "wine",
  align = "left",
}: {
  eyebrow: string;
  title: string;
  accent: ReactNode;
  tone?: "wine" | "plum";
  align?: "left" | "center";
}) {
  const prefersReducedMotion = useReducedMotion();
  const centered = align === "center";

  return (
    <div className="relative">
      {/* No negative z-index here on purpose - the CardGlow bug (fixed
          2026-07-19) was exactly this: a -z-10 descendant paints behind the
          nearest ancestor stacking context's own background, not just
          behind its siblings, and against an opaque section background it
          rendered fully hidden. DOM order alone (this div before the
          heading content, neither with an explicit z-index) already stacks
          it correctly. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-4 -top-8 size-56"
        style={{
          background: `radial-gradient(50% 50% at 30% 30%, color-mix(in oklab, var(--color-${tone}) 16%, transparent), transparent 70%)`,
        }}
      />
      <div
        className={`mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary ${
          centered ? "justify-center" : ""
        }`}
      >
        <motion.span
          className="h-px w-8 origin-left bg-primary"
          aria-hidden="true"
          initial={prefersReducedMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {eyebrow}
      </div>
      <h2 className={`font-heading text-4xl leading-tight sm:text-5xl ${centered ? "text-center" : ""}`}>
        {title}{" "}
        <motion.em
          className="gradient-text italic"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          {accent}
        </motion.em>
      </h2>
    </div>
  );
}
