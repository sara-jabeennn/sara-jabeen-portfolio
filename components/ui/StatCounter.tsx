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

function Stat({ stat }: { stat: StatItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const value = useCountUp(stat.value, inView, !!reduceMotion);

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-4xl text-primary">
        {value}
        {stat.suffix ?? ""}
      </p>
      <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
        {stat.label}
      </p>
    </div>
  );
}

export function StatCounter({ stats }: { stats: StatItem[] }) {
  return (
    <div className="flex flex-wrap gap-8 sm:gap-12">
      {stats.map((stat) => (
        <Stat key={stat.label} stat={stat} />
      ))}
    </div>
  );
}
