"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Mail, Copy, Check, Send, X } from "lucide-react";
import { profile } from "@/data/profile";

export function EmailWidget() {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!expanded) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpanded(false);
    };
    const onClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setExpanded(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onClickOutside);
    };
  }, [expanded]);

  async function handleCopy() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.25, ease: "easeOut" as const };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-4 z-50 sm:right-6"
    >
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.96 }}
            transition={transition}
            className="mb-3 w-[calc(100vw-2rem)] max-w-xs rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-lg"
          >
            <div className="mb-3 flex items-start justify-between gap-2">
              <p className="font-heading text-base">Email me</p>
              <button
                type="button"
                aria-label="Close email card"
                onClick={() => setExpanded(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
            <p className="mb-4 break-all font-mono text-sm text-muted-foreground">
              {profile.email}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border px-3 py-2 text-sm hover:border-primary hover:text-primary"
              >
                {copied ? (
                  <Check className="size-4" aria-hidden="true" />
                ) : (
                  <Copy className="size-4" aria-hidden="true" />
                )}
                {copied ? "Copied" : "Copy email"}
              </button>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-2 text-sm text-primary-foreground hover:opacity-90"
              >
                <Send className="size-4" aria-hidden="true" />
                Send email
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-label={expanded ? "Close email card" : `Email ${profile.name}`}
        aria-expanded={expanded}
        onClick={() => setExpanded((value) => !value)}
        className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        <Mail className="size-5" aria-hidden="true" />
      </button>
    </div>
  );
}
