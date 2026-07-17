// Glossy hover sheen - a skewed gradient bar that sweeps across the card on
// hover. Pure CSS (group-hover), no client component needed. Requires a
// `group relative overflow-hidden` wrapper on the parent card. Fully removed
// under prefers-reduced-motion rather than just skipping the animation, so
// there's nothing to jump-cut into place.
export function CardSheen() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] motion-reduce:hidden"
    >
      <div className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 -translate-x-[250%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[450%]" />
    </div>
  );
}
