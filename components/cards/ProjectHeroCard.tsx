"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { siGithub } from "simple-icons";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { Project } from "@/types";
import { SimpleIconGlyph } from "@/components/icons/SimpleIconGlyph";
import { CardGlow } from "@/components/ui/CardGlow";
import { CardSheen } from "@/components/ui/CardSheen";
import { MeshDiagram } from "@/components/visuals/MeshDiagram";
import { formatDateRange } from "@/lib/format-date";

const pillList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};
const pill = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0 },
};

// The visually dominant top tier of the Projects hierarchy - QuickAid only.
// Two columns (copy left, her own mesh-routing diagram right - no app
// screenshot, the diagram shows she designed the routing, a screenshot would
// only show the app runs), wide, its own row, more body copy and breathing
// room than anything else on the page, plus a subtle tilt-on-hover.
export function ProjectHeroCard({ project, index }: { project: Project; index: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const dateRange = formatDateRange(project.dateStart, project.dateEnd);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(x * 8);
    rotateX.set(y * -8);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        prefersReducedMotion
          ? undefined
          : { rotateX, rotateY, transformPerspective: 800 }
      }
      className="group relative overflow-hidden rounded-3xl border-2 border-border bg-card p-8 transition-colors hover:border-primary sm:p-12"
    >
      <CardGlow color="wine" />
      <CardSheen />
      <div className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-heading text-2xl italic text-primary">{index}</span>
            <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary">
              Final Year Project
            </span>
            {dateRange && (
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {dateRange}
              </span>
            )}
          </div>

          <h3 className="mt-5 font-heading text-3xl italic leading-tight sm:text-5xl">
            {project.title}
          </h3>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            {project.summary}
          </p>

          <motion.ul
            className="mt-6 flex flex-wrap gap-2"
            initial={prefersReducedMotion ? undefined : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "show"}
            viewport={{ once: true }}
            variants={pillList}
          >
            {project.stack.map((tech) => (
              <motion.li
                key={tech}
                variants={prefersReducedMotion ? undefined : pill}
                className="rounded-md bg-background px-3 py-1.5 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </motion.li>
            ))}
          </motion.ul>

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-primary hover:text-primary"
            >
              <SimpleIconGlyph icon={siGithub} className="size-4" />
              View on GitHub
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          )}
        </div>

        <div className="rounded-2xl border border-border bg-background/40 p-3">
          <MeshDiagram />
        </div>
      </div>
    </motion.article>
  );
}
