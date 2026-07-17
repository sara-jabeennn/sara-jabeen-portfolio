"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Section eyebrow (rule + mono uppercase label) + heading with an italic
// Playfair accent on the closing phrase, ported from docs/old-portfolio.html's
// .section-label / .section-title pattern. The rule draws left-to-right and
// the accent word fades in just after the rest of the heading, both on
// scroll-into-view, both static under prefers-reduced-motion.
export function SectionHeading({
  eyebrow,
  title,
  accent,
}: {
  eyebrow: string;
  title: string;
  accent: ReactNode;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <div className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary">
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
      <h2 className="font-heading text-3xl leading-tight sm:text-4xl">
        {title}{" "}
        <motion.em
          className="italic text-primary"
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
