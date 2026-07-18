"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Confirmed accurate role set (not "UX Designer" alone - she does UX
// engineering, not just design). Role rotator was banned as an overused
// trope, then explicitly un-banned - see CLAUDE.md Decisions Log.
// Full-stack leads (she's targeting full-stack SWE roles); MLOps Engineer
// moved last so it reads as a supporting differentiator, not the headline -
// same 4 roles, reordered 2026-07-18 per reviewer feedback.
const ROLES = [
  "Full-Stack Software Engineer",
  "Mobile Developer",
  "UX Engineer",
  "MLOps Engineer",
];

export function RoleRotator() {
  const prefersReducedMotion = useReducedMotion();
  const [text, setText] = useState(ROLES[0]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function tick() {
      const role = ROLES[roleIndex];
      if (!deleting) {
        charIndex++;
        setText(role.slice(0, charIndex));
        if (charIndex === role.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1600);
          return;
        }
      } else {
        charIndex--;
        setText(role.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % ROLES.length;
        }
      }
      timeoutId = setTimeout(tick, deleting ? 40 : 80);
    }

    timeoutId = setTimeout(tick, 1000);
    return () => clearTimeout(timeoutId);
  }, [prefersReducedMotion]);

  return (
    <span className="border-r-2 border-primary pr-1">
      {prefersReducedMotion ? ROLES[0] : text}
    </span>
  );
}
