// Subtle gradient ring behind a primary CTA, brightening on hover. Requires
// a `group relative` wrapper around both this and the actual button/link.
// No negative z-index (see the CardGlow/SectionHeading fix history) - DOM
// order alone (this renders before the button content) stacks it correctly
// behind the button's own opaque fill.
export function GlowRing() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -inset-0.5 rounded-full bg-gradient-to-r from-[var(--color-wine)] via-[var(--color-plum)] to-[var(--color-wine)] opacity-40 blur-sm transition-opacity duration-300 group-hover:opacity-90 motion-reduce:transition-none"
    />
  );
}
