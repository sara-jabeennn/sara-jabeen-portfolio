const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/** "2025-08" -> "Aug 2025". Falls back to the raw string for bare years ("2026"). */
export function formatMonthYear(value: string): string {
  const [year, month] = value.split("-");
  if (!month) return year;
  const index = Number(month) - 1;
  return `${MONTHS[index] ?? month} ${year}`;
}

export function formatDateRange(start: string, end: string | "present"): string {
  if (end === "present") return `${formatMonthYear(start)} – Present`;
  return `${formatMonthYear(start)} – ${formatMonthYear(end)}`;
}
