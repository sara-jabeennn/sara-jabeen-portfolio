"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { profile } from "@/data/profile";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Showcase", href: "/#showcase" },
  { label: "Contact", href: "/#contact" },
  { label: "Blog", href: "/blog" },
] as const;

const SECTION_IDS = NAV_LINKS.filter((link) => link.href.startsWith("/#")).map(
  (link) => link.href.slice(2)
);

function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-heading text-lg italic text-primary">
          {profile.name}
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.startsWith("/#") ? link.href.slice(2) : null;
            const isActive = sectionId !== null && sectionId === activeId;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`text-sm uppercase tracking-wide transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <ul
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm uppercase tracking-wide text-muted-foreground hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
