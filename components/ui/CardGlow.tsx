// Per-card radial glow, ported from docs/old-portfolio.html's .bc-glow-*
// treatment (~lines 117-120) - alternates wine/plum by index. Requires a
// `group relative` wrapper on the parent card. Decorative, AA-exempt.
//
// BUG FIXED 2026-07-19: this previously had `-z-10`, which paints a child
// BELOW the card's own background per CSS stacking rules (any box's own
// background always paints below its children, and a negative z-index child
// paints below that again) - against an opaque `bg-card` fill the glow was
// rendering completely hidden, confirmed by an actual before/after
// screenshot, not assumed from reading the CSS. No z-index needed: DOM order
// alone (this div before the card's content) already stacks it correctly
// above the card background and below the content.
export function CardGlow({ color }: { color: "wine" | "plum" }) {
  const position = color === "wine" ? "20% 0%" : "80% 100%";
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:hidden"
      style={{
        background: `radial-gradient(60% 50% at ${position}, color-mix(in oklab, var(--color-${color}) 22%, transparent), transparent 70%)`,
      }}
    />
  );
}
