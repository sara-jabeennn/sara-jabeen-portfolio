# TASKS — Phased build breakdown

One `feature/*` branch per task, Conventional Commits, merge to `main` only on
green CI. Source of truth for every decision referenced here is `CLAUDE.md` — if
this file and `CLAUDE.md` ever disagree, `CLAUDE.md` wins. Update the Progress/TODO
checklist in `CLAUDE.md` as each task lands.

---

## Phase 0 — Repo & tooling

### `chore/branch-and-docs-hygiene`
**Done when:** default branch is `main` (not `master`), the three new `docs/*.md`
files are committed, `.gitignore` confirmed to cover `.env`, `.env.local`,
`.env*.local`.
**Files:** git config only, `docs/*.md`.
**Data depended on:** none.
**Commits:** `chore: rename default branch to main`,
`docs: commit implementation plan and prompt reference docs`.

### `chore/tooling-baseline`
**Done when:** `pnpm install`, `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm build`
all pass on the bare scaffold with zero custom features added yet. `components.json`
present, every shadcn CSS variable retheme to the CLAUDE.md palette verified by
grep (no `zinc`/`slate`/`neutral` hex or Tailwind default tokens remain in
`globals.css`). `.github/workflows/ci.yml` exists and is green on push.
**Files:** `package.json`, `components.json`, `app/globals.css`,
`.github/workflows/ci.yml`, `.env.example`, `vitest.config.ts`,
`playwright.config.ts`, `eslint.config.mjs`.
**Data depended on:** none.
**Commits:** `chore: install and init shadcn/ui, retheme to warm dark palette`,
`chore: install framer-motion, lucide-react, simple-icons, next-themes`,
`chore: configure mdx tooling`, `chore: install react-hook-form, zod, resend`,
`chore: configure vitest and testing-library`,
`chore: configure playwright and axe-core`, `chore: add ci workflow`.

---

## Phase 1 — Types & data layer

### `feature/core-types`
**Done when:** `tsc --noEmit` clean, zero `any` in `/types`.
**Files:** `types/project.ts`, `types/experience.ts`, `types/skill.ts`,
`types/education.ts`, `types/profile.ts`, `types/stats.ts`, `types/showcase.ts`,
`types/blog.ts`, `types/contact.ts`, `types/index.ts`.
**Data depended on:** none (types come first).
**Commits:** `chore: add core TypeScript interfaces for project, experience,
skill, education, profile, stats, showcase, blog, contact`.
*(Delivered 2026-07-16 — see below, not yet committed.)*

### `feature/data-layer`
**Done when:** every `data/*.ts` file typechecks against its `/types` interface; a
Vitest data-integrity test passes asserting 9 unique project slugs, every
project's `categories` is a subset of the 5-value `CaseStudyCategory` enum,
every `featured: true` project has a resolvable `caseStudyMdxPath`, and no
project's `links.github` is ever the bare profile URL (see CLAUDE.md's
"GitHub links" hard rule — corrected 2026-07-16 after that fallback masked a
missing repo link).
**Files:** `data/profile.ts`, `data/education.ts`, `data/experience.ts`,
`data/projects.ts`, `data/skills.ts`, `data/stats.ts`, `data/showcase.ts`.
**Data depended on:** Content Gaps #6–#13 in `CLAUDE.md` resolved (or explicitly
deferred with a `// TODO(gap-#)` marker in the relevant field).
**Commits:** `feat: add profile, education, and experience data`,
`feat: add 8 projects with categories and stack data`,
`feat: add skills, stats, and showcase data`.

---

## Phase 2 — Design tokens & shell

### `feature/design-tokens`
**Done when:** Tailwind v4 `@theme` block matches the CLAUDE.md palette table
exactly (dark + light), Playfair Display/Geist/Geist Mono loaded via `next/font`
with zero layout-shift (no FOUT flash beyond font-display swap), light-mode tokens
run through a contrast checker and every text/background pairing hits WCAG AA,
adjusted from the CLAUDE.md-proposed values if any pairing fails.
**Files:** `app/globals.css`, `app/layout.tsx` (font loading).
**Data depended on:** none.
**Commits:** `feat: add tailwind v4 theme tokens for warm dark/light palette`,
`feat: load playfair display, geist, and geist mono via next/font`.

### `feature/root-shell`
**Done when:** Navbar (anchored links + active-section highlight), Footer, and
ThemeToggle render on every route; `EmailWidget` mounts once in `app/layout.tsx`
and appears on every route without layout shift; command palette shell opens on
⌘K/Ctrl+K with no actions wired yet (empty state is fine here, actions land in
Phase 10).
**Files:** `components/layout/Navbar.tsx`, `components/layout/Footer.tsx`,
`components/layout/ThemeToggle.tsx`, `app/layout.tsx`.
**Data depended on:** `data/profile.ts` (socials, nav labels).
**Commits:** `feat: add navbar with active-section highlight`,
`feat: add footer`, `feat: add theme toggle`,
`feat: mount email widget shell in root layout`.

---

## Phase 3 — Home

### `feature/hero` — DONE 2026-07-16
**Done when:** Hero renders headline, tagline, tech badge row (Simple Icons, not
text pills), CTA buttons (View Projects, Download CV), aurora/mesh-gradient
background, staggered reveal on load — and nothing else (no role-rotator, no
terminal widget, per CLAUDE.md hard rules). Reduced-motion users see the final
state immediately, no animation.
**Files:** `components/sections/Hero.tsx`, `components/motion/Reveal.tsx`.
**Data depended on:** `data/profile.ts`; Download CV button is disabled/hidden
until Content Gap #1 (résumé PDF) is resolved — do not link a placeholder file.
**Commits:** `feat: add hero section with aurora gradient and staggered reveal`.

### `feature/stat-counters` — DONE 2026-07-16
**Done when:** `StatCounter` animates on scroll-into-view once, respects
reduced-motion (renders final value immediately, no count-up), values come from
`data/stats.ts` with no hardcoded numbers in the component.
**Files:** `components/ui/StatCounter.tsx`.
**Data depended on:** `data/stats.ts`.
**Commits:** `feat: add animated stat counter`.

---

## Phase 4 — About

### `feature/about-section` — DONE 2026-07-16
**Done when:** bio renders as provided in `CLAUDE.md` (graduated framing, not
"final-year"), `EducationCard` shows FAST-NUCES/BS CS/2021–2026/Complete,
freelance-writing line present, `AreaOfInterestTag` row renders the six tags.
**Files:** `components/sections/About.tsx`, `components/cards/EducationCard.tsx`,
`components/ui/AreaOfInterestTag.tsx`.
**Data depended on:** `data/profile.ts`, `data/education.ts`.
**Commits:** `feat: add about section with bio and areas of interest`,
`feat: add education card`.

---

## Phase 5 — Experience

### `feature/experience-section` — DONE 2026-07-16
**Done when:** `ExperienceCard` renders the Freelance Technical Writer entry in
the dual-track (professional/academic) layout; layout supports a second entry
without code changes if Content Gap #13 adds one.
**Files:** `components/sections/Experience.tsx`,
`components/cards/ExperienceCard.tsx`.
**Data depended on:** `data/experience.ts`; Content Gap #13.
**Commits:** `feat: add experience section with dual-track cards`.

---

## Phase 6 — Skills

### `feature/skills-section` — DONE 2026-07-16
**Done when:** `SkillGroup` renders all 7 categories from the implementation
plan, each skill shows its real Simple Icons logo (not a text-only pill), each
category header shows a technology count.
**Files:** `components/sections/Skills.tsx`, `components/ui/SkillGroup.tsx`.
**Data depended on:** `data/skills.ts`.
**Commits:** `feat: add skills section with categorized logo groups`.

---

## Phase 7 — Case studies

### `feature/case-study-filter` — DONE 2026-07-16, RELOCATED same day
(merged into the homepage at `#case-studies`, no longer a routed
`/case-studies` listing page - see CLAUDE.md Decisions Log)
**Done when:** `FilterBar` filters the 9-project grid client-side across
`All · Web · Mobile · AI/MLOps · Design/UX · Systems` with an animated
(Framer Motion layout) transition between filtered states; `SearchBox` filters by
title/stack; both are keyboard operable.
**Files:** `components/cards/CaseStudyCard.tsx`, `components/ui/FilterBar.tsx`,
`components/ui/SearchBox.tsx`, `app/case-studies/page.tsx`.
**Data depended on:** `data/projects.ts`.
**Commits:** `feat: add case study grid with category filter`,
`feat: add case study search`.

### `feature/case-study-mdx`
**Done when:** MDX detail template renders for the 3 featured projects
(QuickAid, E-Commerce Ad Creative Generator, SmartWait) at
`/case-studies/[slug]`, with exactly these sections: Problem, Architecture, Key
Decisions, Result (only if real), What I'd Do Differently. No "My Role"/"My
scope" section, no team-size mention.
**Files:** `app/case-studies/[slug]/page.tsx`, `content/projects/quickaid.mdx`,
`content/projects/ad-creative-generator.mdx`, `content/projects/smartwait.mdx`.
**Data depended on:** Content Gaps #2 and #3 — **blocked** until real case-study
depth content and screenshots exist; do not fill with invented architecture
decisions or metrics. QuickAid specifically must follow "Project content &
attribution rules" in `CLAUDE.md` — no teammate names, no supervisor/roll/
section numbers, no team size, no Missing Persons Module. Architecture/Key
Decisions depth centers on mesh networking, Dijkstra routing, gateway
detection, relay privacy, and on-device face recognition.
**Commits:** `feat: add mdx case study detail template`,
`feat: add quickaid case study`,
`feat: add e-commerce ad creative generator case study`,
`feat: add smartwait case study`.

### `feature/case-study-cards-standard` — DONE 2026-07-16 (all 9 render
through the same `ProjectCard`, not just the 6 non-featured ones - no MDX
route exists for any project yet, featured included, so there's currently no
distinction to draw between them)
**Done when:** the remaining 6 projects (Fake News Detection, Shuttle Bot, My
Beauty Assistant, LMS, Corporate Vendor & Contract Management System, Advanced
Classroom Management System) render as standard cards, no MDX route generated
for any of them. Each renders a GitHub button **only if** `links.github` is
set (7 of 9 projects total have one, see CLAUDE.md "GitHub links") — SmartWait
and Shuttle Bot render the card with no GitHub button at all. **This is the
acceptance test for the whole task**: render every project and confirm exactly
2 of 9 cards have no GitHub button, and that none of them silently link the
profile URL instead.
**Files:** `components/cards/CaseStudyCard.tsx` (variant), `data/projects.ts`.
**Data depended on:** `data/projects.ts` (all categories and repo links
confirmed as of 2026-07-16).
**Commits:** `feat: render standard project cards for non-featured projects`.

---

## Phase 8 — Showcase

### `feature/showcase-section` — DONE 2026-07-16
**Done when:** `ShowcaseEntry` list renders certifications/achievements reused
from `docs/old-portfolio.html` (Fauji Foundation Scholarship, KIPS Certificate of
Merit, A+ FYP-1, Coursera/MLOps/UX coursework) pending Content Gap #15
confirmation.
**Files:** `components/sections/Showcase.tsx`,
`components/cards/ShowcaseEntry.tsx`.
**Data depended on:** `data/showcase.ts`; Content Gap #15.
**Commits:** `feat: add showcase section with certifications and achievements`.

---

## Phase 9 — Contact & email widget

### `feature/contact-api` — DONE 2026-07-16
**Done when:** `POST /api/contact` validates with the server-side Zod schema,
rejects honeypot-filled submissions with a silent 200, rate-limits per IP
in-memory, sends via Resend, and throws (fails loudly, visible in dev server
logs/response) if `RESEND_API_KEY` is unset — never silently no-ops.
**Files:** `app/api/contact/route.ts`, `lib/schemas/contact.ts`,
`lib/rate-limit.ts`, `.env.example`.
**Data depended on:** Content Gap #4 (`RESEND_API_KEY`, sending domain, confirmed
destination address).
**Commits:** `feat: add contact api route with resend`,
`feat: add server-side zod validation for contact form`,
`feat: add honeypot and per-ip rate limiting to contact api`.

### `feature/contact-form-ui` — DONE 2026-07-16
**Done when:** `ContactForm` (RHF + Zod + shadcn `Form`/`Input`/`Label`/`Button`)
shows inline field errors, a loading state on submit, and a real success/failure
state via shadcn `Sonner` — no state is faked if the API call fails. The
Contact section (not the form itself) also renders `Profile.phone` as a `tel:`
link with click-to-copy matching the email's affordance, plus a `wa.me` link
from `Profile.whatsappUrl` — this is the only place phone/WhatsApp appear
anywhere on the site.
**Files:** `components/ui/ContactForm.tsx`, `components/sections/Contact.tsx`.
**Data depended on:** `types/contact.ts`, `lib/schemas/contact.ts`,
`data/profile.ts` (phone, whatsappUrl).
**Commits:** `feat: add contact form with inline validation and submit states`,
`feat: add phone and whatsapp links to contact section`.

### `feature/email-widget`
**Already built in `feature/root-shell` (Phase 2, 2026-07-16)** — collapsed
FAB, expanded card with copy-to-clipboard + `mailto:`, Escape/click-outside to
close, reduced-motion aware. Remaining for this phase: confirm the
responsive collapse under 768px and the never-overlaps-footer/contact-form
behavior once Contact (this phase) actually exists to check against.
**Files:** `components/widgets/EmailWidget.tsx` (exists, revisit only).
**Data depended on:** `data/profile.ts` (email).
**Commits:** `fix: adjust email widget for contact section layout` (only if
something actually needs to change once Contact is built).

---

## Phase 10 — Command palette

### `feature/command-palette`
**Done when:** ⌘K/Ctrl+K opens shadcn `Command` with working actions: navigate to
each section/route, jump to a named project, toggle theme, copy email — all
keyboard operable, closes on Escape or action select.
**Files:** `components/widgets/CommandPalette.tsx`.
**Data depended on:** `data/profile.ts`, `data/projects.ts`.
**Commits:** `feat: add command palette with navigation and quick actions`.

---

## Phase 11 — Blog

### `feature/blog-index` — DONE 2026-07-16 (index + template only; tags,
syntax highlighting, reading progress, and RSS not built)
**Done when:** `/blog` renders an index (empty state is acceptable per
CLAUDE.md), post template supports tags, syntax-highlighted code blocks, and a
reading-progress bar; `/blog/rss.xml` route serves a valid RSS feed even with zero
posts.
**Files:** `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `app/blog/rss.xml/route.ts`,
`content/blog/*.mdx` (if Content Gap #14 resolved).
**Data depended on:** Content Gap #14.
**Commits:** `feat: add blog index and mdx post template`,
`feat: add rss feed for blog`.

---

## Phase 12 — GitHub integration

### `feature/github-graph`
**Done when:** contribution graph + latest-repos widget renders from a
server-only fetch (`lib/github.ts`) using Next's fetch cache with `revalidate`;
`GITHUB_TOKEN` never appears in any client-visible bundle or request (verified by
inspecting the network tab / built client chunks).
**Files:** `lib/github.ts`, `app/api/github/route.ts` (or server component),
`components/sections/Showcase.tsx` or a new `GitHubActivity` component.
**Data depended on:** Content Gap #5 (`GITHUB_TOKEN`).
**Commits:** `feat: add server-cached github contribution graph and latest repos`.

---

## Phase 13 — SEO & metadata

### `feature/seo-baseline`
**Done when:** `sitemap.ts`, `robots.ts`, and per-route `metadata` exports are
present; JSON-LD (`Person` on About/home, `CreativeWork` per case study) validates
in a structured-data testing tool. `Person` schema deliberately omits
`telephone` — phone stays human-facing only, see CLAUDE.md "Phone & WhatsApp".
**Files:** `app/sitemap.ts`, `app/robots.ts`, per-route `page.tsx` metadata,
`lib/utils.ts` (JSON-LD helper).
**Data depended on:** `data/profile.ts`, `data/projects.ts`.
**Commits:** `feat: add sitemap, robots, and json-ld structured data`.

### `feature/dynamic-og`
**Done when:** `next/og` generates a distinct OG image per case study and blog
post, verified via a link-preview debugger.
**Files:** `app/opengraph-image.tsx`, `app/case-studies/[slug]/opengraph-image.tsx`,
`app/blog/[slug]/opengraph-image.tsx`.
**Data depended on:** `data/projects.ts`.
**Commits:** `feat: add dynamic og image generation`.

---

## Phase 14 — Accessibility & responsive pass

### `feature/a11y-pass`
**Done when:** full keyboard traversal works with no dead ends across nav,
palette, filter, and form; every icon-only button has an ARIA label; contrast
verified in both themes; every animated component confirmed to respect
`prefers-reduced-motion`.
**Files:** cross-cutting, no new files expected.
**Data depended on:** none.
**Commits:** `fix: address accessibility audit findings`.

### `feature/responsive-pass`
**Done when:** every section verified at 375px, 768px, 1440px with no overflow,
overlap, or unreachable content.
**Files:** cross-cutting.
**Data depended on:** none.
**Commits:** `fix: address responsive layout issues from audit`.

---

## Phase 15 — Testing

### `feature/unit-tests`
**Done when:** Vitest + RTL suite covers filter logic, Zod schema validation
(contact + data-integrity), and `EmailWidget` clipboard-copy behavior; all pass
in CI.
**Files:** `**/*.test.ts(x)` colocated with source, `vitest.config.ts`.
**Data depended on:** `data/projects.ts`, `lib/schemas/contact.ts`.
**Commits:** `test: add filter logic unit tests`,
`test: add zod schema and data-integrity tests`,
`test: add email widget clipboard tests`.

### `feature/e2e-tests`
**Done when:** Playwright covers nav, category filter, contact happy path, contact
error path, and full keyboard-only traversal of the homepage; all pass in CI.
**Files:** `e2e/*.spec.ts`, `playwright.config.ts`.
**Data depended on:** deployed/dev build of the full site (this task lands last
among Phase 15 tasks).
**Commits:** `test: add e2e nav and filter tests`,
`test: add e2e contact form happy and error path tests`,
`test: add keyboard-only traversal e2e test`.

### `feature/a11y-tests`
**Done when:** `@axe-core/playwright` asserts zero violations on every route,
wired as a required CI check.
**Files:** `e2e/a11y.spec.ts`.
**Data depended on:** all routes built.
**Commits:** `test: add axe-core accessibility assertions per route`.

---

## Phase 16 — 404, polish, launch

### `feature/not-found`
**Done when:** custom 404 renders with navigation back to key sections, matches
design system.
**Files:** `app/not-found.tsx`.
**Commits:** `feat: add custom 404 page`.

### `feature/polish-launch`
**Done when:** every image uses `next/image`, no console errors/warnings on any
route, Lighthouse 95+ mobile across all four categories, README includes CI
badge + screenshot + local setup + "how to add a project/post" instructions,
CLAUDE.md Progress/TODO fully checked off, deployed to Vercel production.
**Files:** `README.md`, cross-cutting image/perf fixes.
**Commits:** `perf: optimize images and address lighthouse findings`,
`docs: finalize readme with ci badge and setup instructions`,
`docs: update claude.md progress and decisions log for launch`.
