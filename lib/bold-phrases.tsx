import { Fragment } from "react";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Wraps each occurrence of the given phrases in <strong>. Presentation-only
 * highlighting of already-real bio text (data/profile.ts), not new content. */
export function boldPhrases(text: string, phrases: string[]) {
  if (phrases.length === 0) return text;
  const pattern = new RegExp(`(${phrases.map(escapeRegExp).join("|")})`, "g");
  const parts = text.split(pattern);

  return parts.map((part, i) =>
    phrases.includes(part) ? (
      <strong key={i} className="text-foreground">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}
