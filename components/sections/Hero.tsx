"use client";

import { useRef } from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/data/profile";
import { stats } from "@/data/stats";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GlowRing } from "@/components/ui/GlowRing";
import { AreaOfInterestTag } from "@/components/ui/AreaOfInterestTag";
import { RoleRotator } from "@/components/ui/RoleRotator";
import { TerminalWidget } from "@/components/ui/TerminalWidget";

const projectsBuilt = stats.find((s) => s.label === "Projects")?.value ?? projects.length;

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
      className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center overflow-hidden px-6 py-20"
    >
      {/* Aurora/mesh gradient - scroll parallax (y, from useScroll) plus a
          slow ~20s independent drift (x/scale, from animate) layered on the
          same element. These are different style keys so framer-motion can
          drive both at once without conflict. Static under reduced motion -
          both the scroll-linked y and the drift collapse to 0/1. */}
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
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, 24, -16, 0], scale: [1, 1.06, 0.98, 1] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 20, repeat: Infinity, ease: "easeInOut" }
        }
      />

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        {/* Left column */}
        <div>
          <Reveal>
            <p className="mb-4 font-mono text-sm uppercase tracking-widest text-muted-foreground">
              {profile.status}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-heading text-5xl italic leading-[1.05] sm:text-7xl">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 min-h-8 text-xl text-muted-foreground sm:text-2xl">
              <RoleRotator />
            </p>
            <p className="mt-2 max-w-xl text-muted-foreground">{profile.tagline}</p>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-6 flex flex-wrap gap-2">
              {profile.areasOfInterest.map((area, i) => (
                <li key={area}>
                  <AreaOfInterestTag label={area} tone={i % 2 === 0 ? "wine" : "plum"} />
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton>
                <div className="group relative inline-flex">
                  <GlowRing />
                  <Link
                    href="/#case-studies"
                    className="relative inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
                  >
                    View Projects
                  </Link>
                </div>
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
        </div>

        {/* Right column - bento identity/stat/terminal cards */}
        <Reveal delay={0.3} className="hidden lg:block">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-primary/40 font-heading text-xl italic text-primary">
                  SJ
                </div>
                <div>
                  <p className="font-heading text-lg">{profile.name}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-widest text-muted-foreground">
                    {profile.role}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Projects Built
              </p>
              <p className="mt-1 font-heading text-3xl text-primary">{projectsBuilt}</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                FYP Grade
              </p>
              <p className="mt-1 font-heading text-3xl" style={{ color: "var(--chart-2)" }}>
                A+
              </p>
            </div>

            <div className="col-span-2 rounded-2xl border border-border bg-card p-4">
              <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                Current Stack
              </p>
              <TerminalWidget />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground sm:flex">
        <span>Scroll to explore</span>
        <span className="h-10 w-px animate-scroll-pulse bg-gradient-to-b from-primary to-transparent motion-reduce:animate-none" />
      </div>
    </section>
  );
}
