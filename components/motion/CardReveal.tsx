"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// Like Reveal, but with a subtle scale added to the y-offset - specifically
// for card grids (project/skill/showcase cards), where a slight "settle
// into place" reads better than a plain fade-up.
export function CardReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
