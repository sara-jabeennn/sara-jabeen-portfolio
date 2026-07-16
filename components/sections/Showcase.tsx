import { showcase } from "@/data/showcase";
import { Reveal } from "@/components/motion/Reveal";
import { ShowcaseEntry } from "@/components/cards/ShowcaseEntry";

export function Showcase() {
  return (
    <section id="showcase" className="scroll-mt-20 bg-card/40 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-heading text-3xl italic">Showcase</h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {showcase.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.04}>
              <ShowcaseEntry entry={entry} glow={index % 2 === 0 ? "wine" : "plum"} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
