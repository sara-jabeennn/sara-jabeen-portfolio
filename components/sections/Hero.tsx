"use client";

import { useRef } from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { stats } from "@/data/stats";
import { Reveal } from "@/components/motion/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SimpleIconGlyph } from "@/components/icons/SimpleIconGlyph";
import { SIMPLE_ICONS } from "@/components/icons/simple-icons-map";

const badgeSkills = skills
  .flatMap((category) => category.skills)
  .filter(
    (skill): skill is typeof skill & { simpleIconSlug: string } =>
      !!skill.simpleIconSlug && skill.simpleIconSlug in SIMPLE_ICONS
  );

export function Hero({ resumeUrl }: { resumeUrl?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const gradientY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative overflow-hidden px-6 py-24 sm:py-32"
    >
      {/* Aurora/mesh gradient (deep wine/plum, decorative - not text, AA
          exempt) with a subtle scroll parallax - one of the two allowed
          hero motion effects, the other is the staggered reveal below.
          No role-rotator, no terminal widget, per CLAUDE.md hard rules. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          y: prefersReducedMotion ? 0 : gradientY,
          background:
            "radial-gradient(55% 50% at 15% 15%, color-mix(in oklab, var(--color-wine) 22%, transparent), transparent 70%), " +
            "radial-gradient(45% 40% at 85% 0%, color-mix(in oklab, var(--color-plum) 20%, transparent), transparent 70%), " +
            "radial-gradient(50% 45% at 50% 100%, color-mix(in oklab, var(--color-wine) 10%, transparent), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="mb-4 font-mono text-sm uppercase tracking-widest text-muted-foreground">
            {profile.status}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="font-heading text-4xl italic leading-tight sm:text-6xl">
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-4 max-w-2xl text-xl text-muted-foreground sm:text-2xl">
            {profile.role} — {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton>
              <Link
                href="/#case-studies"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
              >
                View Projects
              </Link>
            </MagneticButton>
            {resumeUrl ? (
              <a
                href={resumeUrl}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                <Download className="size-4" aria-hidden="true" />
                Download CV
              </a>
            ) : (
              <span
                aria-disabled="true"
                title="Résumé coming soon"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-muted-foreground opacity-60"
              >
                <Download className="size-4" aria-hidden="true" />
                Résumé coming soon
              </span>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <ul className="mt-12 flex flex-wrap gap-3">
            {badgeSkills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground"
              >
                <SimpleIconGlyph
                  icon={SIMPLE_ICONS[skill.simpleIconSlug]}
                  className="size-3.5"
                />
                {skill.name}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.5} className="mt-16">
          <StatCounter stats={stats} />
        </Reveal>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground sm:flex">
        <span>Scroll to explore</span>
        <span className="h-10 w-px animate-scroll-pulse bg-gradient-to-b from-primary to-transparent motion-reduce:animate-none" />
      </div>
    </section>
  );
}
