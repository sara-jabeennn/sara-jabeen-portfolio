export function AreaOfInterestTag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border bg-card px-3 py-1.5 text-xs uppercase tracking-wide text-muted-foreground">
      {label}
    </span>
  );
}
