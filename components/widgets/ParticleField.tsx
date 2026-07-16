"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  alpha: number;
  color: "wine" | "plum";
}

const PARTICLE_COUNT = 60;
const LINK_DISTANCE = 120;
const WINE_RGB = "139, 61, 85";
const PLUM_RGB = "94, 44, 78";

// Ported from docs/old-portfolio.html's #particles-canvas (~line 834-866):
// same particle count, drift speed, and connecting-line distance, recolored
// to alternate wine/plum. Not the typewriter, not the custom cursor - both
// still banned per CLAUDE.md.
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let frame: number;
    let running = true;

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.4 + 0.1,
      color: i % 2 === 0 ? "wine" : "plum",
    }));

    function onResize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        const rgb = p.color === "wine" ? WINE_RGB : PLUM_RGB;
        ctx.fillStyle = `rgba(${rgb}, ${p.alpha})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${WINE_RGB}, ${0.06 * (1 - d / LINK_DISTANCE)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      if (running) frame = requestAnimationFrame(draw);
    }

    function onVisibilityChange() {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(frame);
      } else if (!running) {
        running = true;
        frame = requestAnimationFrame(draw);
      }
    }

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibilityChange);
    frame = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
