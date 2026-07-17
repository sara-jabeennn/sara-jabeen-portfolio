// Glossy hover sheen - a skewed gradient bar that sweeps across the card on
// hover. Pure CSS (group-hover), no client component needed. Requires a
// `group relative overflow-hidden` wrapper on the parent card. Fully removed
// under prefers-reduced-motion rather than just skipping the animation, so
// there's nothing to jump-cut into place.
//
// CRANKED 2026-07-19: the previous via-white/40 at w-1/4 was coded correctly
// but visually a non-event - confirmed by screenshotting a card mid-sweep,
// not just reading the CSS (the same lesson as the CardGlow z-index bug).
// Wider band, brighter core, and a wine-tinted bloom underneath so it reads
// as a lit sweep rather than a faint smudge.
export function CardSheen() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] motion-reduce:hidden"
    >
      <div className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 -translate-x-[350%] bg-gradient-to-r from-transparent via-[color-mix(in_oklab,var(--color-wine)_35%,white_65%)]/80 to-transparent transition-transform duration-[600ms] ease-out group-hover:translate-x-[450%]" />
    </div>
  );
}
