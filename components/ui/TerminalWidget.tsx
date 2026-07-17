"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const LINES = [
  { prompt: "$", text: "git commit -m \"ship it\"" },
  { prompt: "$", text: "pnpm build" },
  { prompt: "$", text: "vercel deploy --prod" },
  { prompt: "✓", text: "Live in production" },
];

// Terminal-style "current stack" widget - banned earlier this project as an
// overused trope, then explicitly un-banned. See CLAUDE.md Decisions Log.
export function TerminalWidget() {
  const prefersReducedMotion = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(
    prefersReducedMotion ? LINES.length : 0
  );

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timers = LINES.map((_, i) =>
      setTimeout(() => setVisibleCount((count) => Math.max(count, i + 1)), 500 + i * 400)
    );
    return () => timers.forEach(clearTimeout);
  }, [prefersReducedMotion]);

  return (
    <div className="rounded-xl bg-background p-3 font-mono text-xs">
      {LINES.map((line, i) => (
        <p
          key={line.text}
          className={`mb-1 text-muted-foreground transition-opacity duration-300 last:mb-0 ${
            i < visibleCount ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-primary">{line.prompt}</span> {line.text}
        </p>
      ))}
    </div>
  );
}
