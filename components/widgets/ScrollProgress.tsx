"use client";

import { motion, useReducedMotion, useScroll } from "framer-motion";

// Thin bar tracking whole-page scroll progress, pinned under the sticky
// navbar. Uses useScroll's default window-scroll target - no ref needed.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-primary"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
