export function AreaOfInterestTag({
  label,
  tone = "wine",
}: {
  label: string;
  tone?: "wine" | "plum";
}) {
  if (tone === "wine") {
    return (
      <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs uppercase tracking-wide text-primary">
        {label}
      </span>
    );
  }

  return (
    <span
      className="rounded-full border px-3 py-1.5 text-xs uppercase tracking-wide"
      style={{
        borderColor: "color-mix(in oklab, var(--chart-2) 40%, transparent)",
        backgroundColor: "color-mix(in oklab, var(--chart-2) 12%, transparent)",
        color: "var(--chart-2)",
      }}
    >
      {label}
    </span>
  );
}
