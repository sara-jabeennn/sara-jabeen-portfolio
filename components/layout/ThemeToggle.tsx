"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

function noopSubscribe() {
  return () => {};
}

// Branching directly on `resolvedTheme` (undefined until after mount) was
// supposed to dodge a hydration mismatch without a separate mounted state,
// but in practice `resolvedTheme` was already populated by the time React
// did its hydration comparison, so server and client rendered different
// aria-labels/icon-opacity and React logged a real hydration-mismatch
// warning (visible as the dev overlay's "1 Issue" badge). `useSyncExternalStore`
// is the fix: its server snapshot (`false`) always matches the client's first
// render, and it only flips to `true` after hydration - no effect+setState
// needed, so it also sidesteps the "setState in an effect" lint rule that a
// manual `useState` + `useEffect` mounted-guard would trigger.
function useHasMounted() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const mounted = useHasMounted();
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-4" aria-hidden="true" />
        ) : (
          <Moon className="size-4" aria-hidden="true" />
        )
      ) : (
        <Sun className="size-4 opacity-0" aria-hidden="true" />
      )}
    </Button>
  );
}
