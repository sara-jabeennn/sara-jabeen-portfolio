"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import type { StatItem } from "@/types";

function useCountUp(target: number, active: boolean, reduceMotion: boolean) {
  const [value, setValue] = useState(() => (reduceMotion ? target : 0));

  useEffect(() => {
    if (!active || reduceMotion) return;

    const duration = 1200;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, reduceMotion]);

  return value;
}

function Stat({ stat, large }: { stat: StatItem; large?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const value = useCountUp(stat.value, inView, !!reduceMotion);

  return (
    <div ref={ref} className="text-center">
      <p
        className={`font-heading text-primary ${large ? "text-5xl sm:text-6xl" : "text-4xl"}`}
      >
        {value}
        {stat.suffix ?? ""}
      </p>
      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {stat.label}
      </p>
    </div>
  );
}

export function StatCounter({
  stats,
  large,
}: {
  stats: StatItem[];
  large?: boolean;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
      {stats.map((stat) => (
        <Stat key={stat.label} stat={stat} large={large} />
      ))}
    </div>
  );
}
