// Per-card radial glow, ported from docs/old-portfolio.html's .bc-glow-*
// treatment (~lines 117-120) - alternates wine/plum by index. Requires a
// `group relative` wrapper on the parent card. Decorative, AA-exempt.
export function CardGlow({ color }: { color: "wine" | "plum" }) {
  const position = color === "wine" ? "20% 0%" : "80% 100%";
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background: `radial-gradient(60% 50% at ${position}, color-mix(in oklab, var(--color-${color}) 14%, transparent), transparent 70%)`,
      }}
    />
  );
}
