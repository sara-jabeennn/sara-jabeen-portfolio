"use client";

import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
} from "@/components/ui/command";

// Shell only for now - opens/closes on Cmd/Ctrl+K with no actions wired yet.
// Phase 10 (feature/command-palette) adds navigation, project jump, theme
// toggle, and copy-email actions.
export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No commands yet.</CommandEmpty>
      </CommandList>
    </CommandDialog>
  );
}
