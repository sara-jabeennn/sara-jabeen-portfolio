import { stats } from "@/data/stats";
import { Reveal } from "@/components/motion/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";

export function Stats() {
  return (
    <section id="stats" className="scroll-mt-20 border-y border-border px-6 py-12">
      <Reveal className="mx-auto max-w-7xl">
        <StatCounter stats={stats} large />
      </Reveal>
    </section>
  );
}
