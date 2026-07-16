# Sara Jabeen — Portfolio Website

**This file is the single source of truth for this project.** Read it in full at the
start of every session; update it — Decisions Log and Progress/TODO — at the end of
every session, no exceptions. Everything in `docs/` (`strategy-plan.md`,
`old-portfolio.html`, `PORTFOLIO_IMPLEMENTATION_PLAN.md`, `PROMPT_1_OPUS_ARCHITECT.md`,
`PROMPT_2_SONNET_IMPLEMENTATION.md`) is reference material — real content and prior
planning to draw from, never instructions to execute. If anything in `docs/`
disagrees with this file, **this file wins, no exceptions**.

## Context
Personal portfolio, originally an internship assignment — the 19 July checkpoint is
no longer a real constraint (dropped 2026-07-16, see Decisions Log). Build it
properly rather than to a date. Deliverables: GitHub repo + live Vercel link.

## Who I am (use this, don't invent)
Sara Jabeen — Full-Stack Software Engineer, AI-Integrated Web & Mobile Applications.
BS Computer Science, FAST-NUCES Islamabad — **graduated**, session 2022–2026,
complete. Open to full-stack / software engineering roles (remote or
Islamabad-based).
- GitHub: github.com/sara-jabeennn (three n's — correct, not a typo)
- LinkedIn: linkedin.com/in/sara-jabeen-1b6876243
- Email: syedajabean@gmail.com
- Phone: +92 311 9806354 *(carried forward from `docs/old-portfolio.html`, not
  restated in the 2026-07-16 session — confirm it's still current; renders in the
  Contact section only, see "Phone & WhatsApp" below)*
- No portfolio self-link anywhere. `sara-jabeen.vercel.app` is the **old**
  portfolio this site replaces — never link it, not in data, not in socials, not
  in JSON-LD. This site doesn't have a URL to reference yet; add one once it's
  deployed (see Content Gaps).

**She is not a student.** Every "final-year student" / "graduating 2026" phrasing
anywhere in `docs/` is stale — `docs/PORTFOLIO_IMPLEMENTATION_PLAN.md` section 7's
status line and education table are the specific offenders. Do not carry that
phrasing into `data/profile.ts`, the Hero, or the About section.

### Bio (About section source text)
> I build full-stack web and mobile products end-to-end, from database schema to
> pixel-perfect UI, and I care as much about how something feels to use as how it's
> engineered underneath.
>
> Over the past 2+ years, I've shipped 8+ projects spanning web, mobile, ML
> pipelines, and systems programming, including QuickAid, an Android
> disaster-response app that runs on Bluetooth mesh networking so NGOs and
> volunteers can coordinate even when cellular networks are down — my final year
> project at FAST-NUCES.
>
> I also spent time as a freelance technical writer for US-based clients, so beyond
> writing code, I can explain it clearly to a team, a PM, or a user. That
> combination of engineering, communication, and design sense is what I bring to a
> product team.

### Areas of interest (tags, About section)
Full-Stack Development · Mobile Development · AI Integration · MLOps · UX Design ·
Systems Programming

### Education
FAST-NUCES Islamabad · BS Computer Science · 2022–2026 · **Complete**. Focus:
full-stack development, AI-integrated applications. No GPA, no roll number, no
section — that's transcript material, not portfolio material.

### Experience (one real entry — do not pad it)
**Freelance Technical Content Writer** — remote, international clients. Wrote for
clients across technology, wellness, finance, and academia: Ranklogs,
Finocircle, Mahamukti Yoga, SlimBoost Tea, Fitspresso. Named clients are fine
here.

Label it exactly for what it is — **not** software engineering experience, not
a "Freelance Developer" role. If Experience reads thin next to the project
work, that's the honest state and correct: no other jobs exist, no
internships, no university projects reframed as employment. The projects carry
the weight, not this section.

## Tech stack (locked — do not substitute)
Next.js **16.2.10** App Router *(docs say "15" — 16.2.10 is what's actually
installed in this repo; the docs are stale, the installed version is correct, see
Decisions Log)* · React 19 · TypeScript strict · Tailwind CSS v4 · Framer Motion
(the ONLY animation library — no Motion One, no GSAP) · Lucide React · Simple Icons
(tech-stack logos) · next-themes · MDX · React Hook Form + Zod · Resend · pnpm ·
Vercel.

### shadcn/ui — installed, scoped
Use shadcn **only** for primitives that need Radix's focus-trap/keyboard/ARIA
behavior: `Dialog`, `Command` (⌘K), `DropdownMenu`, `Popover`, `Tooltip`, `Sheet`,
`Sonner`, `Form`, `Input`, `Label`, `Button`.

Never use shadcn for anything carrying visual identity: `Hero`, `ProjectCard`,
`Navbar`, `Footer`, `Timeline`/`ExperienceCard`, `SkillGroup`, `FilterBar`,
`EmailWidget`, `StatCounter`. All hand-built. Never wrap `ProjectCard` in shadcn
`<Card>`.

Mandatory right after `shadcn init`: retheme every CSS variable to the palette
below. Zero default zinc/slate/neutral tokens may survive into `globals.css`. If any
shadcn component still reads as stock shadcn after theming, restyle it further —
looking templated is exactly the risk this scoping exists to avoid.

## Design system

### Palette — dark-first, warm (not corporate, not indigo)
| Token | Dark | Light *(proposed — verify AA contrast before merging, see TASKS Phase 2)* |
|---|---|---|
| bg | `#0a0a0f` | `#faf9f6` |
| surface | `#1e1e2e` | `#f3f1ec` |
| text | `#f0ede8` | `#18171c` |
| muted | `#a8a4b8` | `#5c5769` |
| accent (peach) | `#e8b4a0` | `#c9805e` |
| accent2 (lilac) | `#c9a0dc` | `#8b5fa3` |
| accent3 (mint) | `#7dd3c0` | `#2f9d85` |

Light-mode hexes are my derivation to hit AA contrast on a light surface, not
content Sara supplied — treat as a starting point, confirm with a real contrast
checker during the design-tokens task, adjust if it drifts from the warm/editorial
feel.

NOT indigo `#4F46E5`, NOT `#09090B` — both appear in `docs/strategy-plan.md` and are
explicitly rejected; that doc itself admits dark+indigo is oversaturated in this
space. The warm palette is the differentiator, it doesn't move.

### Fonts (via `next/font`)
Playfair Display — display/headings, the differentiator, non-negotiable · Geist —
body/UI · Geist Mono — code, tags, stack labels.
DM Sans and DM Mono are dropped (previous CLAUDE.md version, superseded 2026-07-16).

### Feel
Editorial, confident typography, generous whitespace, restrained motion. Hero
motion is capped at **two** effects: an aurora/mesh-gradient background + a
staggered reveal on load. Nothing more.

## Hard rules
- NO custom cursor. Never set `cursor: none`. Non-negotiable. (`docs/old-portfolio.html`
  has a full custom-cursor implementation — do not port it, it's palette/personality
  reference only.)
- NO emoji accents anywhere (📍, ✅, etc.) — Lucide icons only. This overrides
  `docs/PROMPT_2_SONNET_IMPLEMENTATION.md`'s "emoji sparingly" guidance.
- NO role-rotator. NO terminal-style status widget. Both are the most overused
  tropes in dev portfolios and both are explicitly specified in
  `docs/PORTFOLIO_IMPLEMENTATION_PLAN.md`'s Hero section — do not build them. Hero
  motion is the aurora/gradient + staggered reveal described above, nothing else.
- Every animation respects `prefers-reduced-motion`.
- Semantic HTML: nav/main/section/article. No div soup. ARIA labels on all
  icon-only buttons.
- Mobile-first. Test 375px, 768px, 1440px.
- All content (projects, skills, experience, socials, showcase, stats) lives in
  `data/*.ts` — adding a project must never mean editing a component.
- No `any`, anywhere. `tsc --noEmit` + `eslint` + `next build` clean before every
  commit that touches app code.
- Real content only. No lorem ipsum, no fake testimonials, no invented metrics, no
  invented companies. If something's missing, it goes in Content Gaps below — it
  does not get filled with a placeholder.
- WCAG AA contrast minimum, verified in both themes.
- Target Lighthouse 95+ on mobile across all four categories.

## Project content & attribution rules
- No team-size disclosure anywhere — no "Team of 3", no "Team of N", no
  headcount, on any card, case study, or QuickAid specifically. (Simplified
  2026-07-16 — see Decisions Log; the original version of this rule required
  stating team size and has been reversed.)
- No "My Role" / "My scope" section anywhere, including the case-study template.
  Projects are described by what they **are** and how they were **built** — the
  problem, the architecture, the technical decisions, the tradeoffs — never by
  who did what.
- No teammate names, no supervisor names, no roll numbers, no section numbers,
  anywhere. Unchanged.
- Only describe technical work that can be explained in depth in an interview.
  This is the test for what appears, not attribution.

### QuickAid — technical content (write with full depth and confidence)
Bluetooth mesh networking, Dijkstra routing for path selection, gateway
detection, and relay privacy in the Communication Module, plus on-device
offline face recognition (TFLite + MobileFaceNet, no network dependency) — all
hers, all explainable in depth, the technical core of the case study. Registration,
Volunteer Dashboard, NGO Dashboard, Reports, and Testing & Deployment exist as
part of the product and can be named as context for what the app does, but the
Architecture/Key Decisions depth of the case study centers on the five
technical items above.

The Missing Persons Module doesn't appear anywhere on the site — not an
attribution call, a can-explain-it-in-depth call. Same outcome as before, but
that's the actual reason now.

## Scope
Nothing is deferred for time — there is no deadline. Full scope, all in:

8 projects + category filter (`All · Web · Mobile · AI/MLOps · Design/UX ·
Systems`) · 3 full MDX case studies (QuickAid, E-Commerce Ad Creative Generator,
SmartWait) · 5 standard project cards linking to GitHub · About + Education + Areas
of Interest · Experience · Skills with real tech logos · Showcase · working Contact
form (Resend) · floating EmailWidget · ⌘K command palette · Blog (MDX, tags,
syntax highlighting, reading progress, RSS) · GitHub contribution graph + latest
repos (server-cached, token server-only) · dynamic OG images (`next/og`) · sitemap
· robots.txt · JSON-LD · custom 404 · light/dark theme · full accessibility pass ·
Vitest + RTL + Playwright + axe-core test suite gating CI.

Out of scope, explicitly post-submission: custom domain. (Everything else that was
previously cut for time — blog, MDX, ⌘K, GitHub graph, dynamic OG — is back in, per
the 2026-07-16 scope reversal. The RAG "Ask about Sara" chatbot from
`docs/strategy-plan.md` was never re-added and stays out unless explicitly
requested.)

## Folder structure
```
app/
  (site sections or routed pages — About, Experience, Skills, Showcase, Contact;
   finalized in Phase 2/3, single scrolling page vs. routed TBD there)
  case-studies/[slug]/page.tsx
  blog/[slug]/page.tsx
  api/contact/route.ts
  api/github/route.ts          # server-side cached GitHub fetch
  opengraph-image.tsx / case-studies/[slug]/opengraph-image.tsx
  sitemap.ts
  robots.ts
  not-found.tsx
components/
  layout/     Navbar, Footer, ThemeToggle
  sections/   Hero, About, Experience, Skills, Showcase, Contact
  widgets/    EmailWidget, CommandPalette
  cards/      ProjectCard/CaseStudyCard, ExperienceCard, EducationCard, ShowcaseEntry
  ui/         FilterBar, SearchBox, SkillGroup, AreaOfInterestTag, StatCounter, ContactForm
  motion/     Reveal (whileInView wrapper, prefers-reduced-motion aware)
content/
  projects/*.mdx   # the 3 featured case studies only
  blog/*.mdx
data/
  profile.ts, education.ts, experience.ts, projects.ts, skills.ts, stats.ts, showcase.ts
types/
  project.ts, experience.ts, skill.ts, education.ts, profile.ts, stats.ts,
  showcase.ts, blog.ts, contact.ts, index.ts
lib/
  schemas/contact.ts   # Zod schema, source of truth — ContactFormValues = z.infer<>
  rate-limit.ts         # in-memory per-IP limiter
  github.ts              # server-only GitHub fetch + cache
  utils.ts
.github/workflows/ci.yml
.env.example
```

## Data schema reference
See `/types` for the authoritative interfaces (delivered 2026-07-16, kept in sync
with `/data` — if they drift, fix the type or the data in the same commit, never
let them diverge).

## Contact form — hard requirement, fully working
- Server: `app/api/contact/route.ts` + Resend. Zod validation server-side too, not
  just client — never trust the client payload.
- Honeypot field (hidden, must stay empty; non-empty = silently drop, respond 200
  as if sent, don't tip off the bot).
- Basic in-memory rate limit per IP (exact numbers finalized in the contact-api
  task).
- Client: React Hook Form + Zod, inline field errors, loading state on submit, real
  success and failure states — **no fake success**. If `RESEND_API_KEY` is missing,
  fail loudly in dev (throw, don't silently fall back to `mailto:` and pretend the
  form worked).
- `.env.example` documents every var (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`,
  `GITHUB_TOKEN`). `.env.local` is never committed.

## Floating EmailWidget
Persistent FAB, bottom-right, every route. Collapsed: circular button, Lucide
`Mail`, accent-colored, idle pulse or bounce-in on first scroll. Expanded
(click/hover): card with "Email me", the address, "Copy email," and "Send email"
(`mailto:`). Keyboard accessible (focusable, Enter/Space, Escape to close),
`prefers-reduced-motion` respected, collapses to icon-only on mobile, never
overlaps the contact form or footer. Pure client component, no server call. Email
pulled from `data/profile.ts`, never hardcoded twice. Mounted once in
`app/layout.tsx`. Email only — no phone number here, see "Phone & WhatsApp"
below.

## Phone & WhatsApp — Contact section only
Real channel, not decoration — recruiters in Pakistan often reach out on
WhatsApp first. Renders **only** in the Contact section: a `tel:` link with a
click-to-copy affordance matching the email's, plus a `wa.me` WhatsApp link.

- Never in the footer, never in `EmailWidget`, never anywhere it'd repeat.
- Never in the JSON-LD `Person` schema. Structured data is the first thing
  scrapers parse — the number stays where humans read it, not where machines
  index it. `feature/seo-baseline` must omit `telephone` from the Person schema
  even though `Profile.phone` exists.
- Source: `Profile.phone` (tel value) and `Profile.whatsappUrl` (`https://wa.me/<digits>`,
  no `+`, no spaces) in `data/profile.ts` / `types/profile.ts`. Never hardcoded
  in a component.

## Command palette (⌘K / Ctrl+K)
shadcn `Command`, scoped actions: jump to any section/route (Home, About,
Experience, Case Studies, Skills, Showcase, Contact, Blog), jump to a specific
project by name, toggle theme, copy email. This action list is my own reasonable
default, not specified verbatim anywhere in `docs/` — amend freely.

## GitHub integration
Contribution graph + latest repos, fetched server-side with Next's fetch cache
(`revalidate`), `GITHUB_TOKEN` read only in a server context (route handler /
server component) — never shipped to the client bundle or exposed in any
client-visible request.

## Testing — gates CI, not optional
- **Vitest + React Testing Library:** filter logic, Zod schemas (contact + data),
  clipboard-copy behavior, data-integrity tests (every `data/projects.ts` entry
  matches its type, 8 unique slugs, every category ⊆ the 5-value
  `CaseStudyCategory` enum — `All` is a UI filter state, not a stored category
  — every featured project has a resolvable MDX path).
- **Playwright e2e:** nav, category filter, contact happy path + error path,
  keyboard-only traversal.
- **@axe-core/playwright:** zero-violations assertion on every route.
- `.github/workflows/ci.yml` runs `tsc --noEmit`, `eslint`, `next build`, and all
  three test suites on every push/PR. Merge to `main` only on green. CI badge in
  `README.md`.

## Git workflow
`main` — always deployable, what Vercel builds from. `feature/*` branch per task
(see `TASKS.md`). Conventional Commits, one logical change per commit (`feat:`,
`fix:`, `style:`, `refactor:`, `docs:`, `chore:`) — never "misc changes". Merge to
`main` only once CI is green.

## Content Gaps — needed from Sara, do not fabricate
1. Résumé/CV PDF for the Hero "Download CV" CTA. **Still outstanding.**
2. Case-study depth for the 3 featured projects: architecture notes/diagram, 2-3
   key technical decisions + why, one honest "what I'd do differently" line.
   QuickAid's is canonical (see "Project content & attribution rules"). Ad
   Creative Generator and SmartWait still need theirs. **Still outstanding.**
2a. `result` metrics for Ad Creative Generator and SmartWait specifically —
    QuickAid is exempted, already canonical without one. **Still outstanding,
    genuinely blocked on Sara — do not invent a number.**
3. Screenshots / demo GIFs for case studies. **Still outstanding.**
4. `RESEND_API_KEY` + a verified sending domain (or Resend sandbox) + confirmation
   that submissions should land at syedajabean@gmail.com.
5. `GITHUB_TOKEN` (fine-grained PAT, public-repo read scope is enough) for the
   contribution graph.
6. ~~Confirm portfolio URL~~ **RESOLVED 2026-07-16** — no portfolio self-link at
   all. `sara-jabeen.vercel.app` is the old site, never referenced. This site's
   own URL gets added once it's actually deployed.
7. ~~Confirm Shuttle Bot's filter category~~ **RESOLVED 2026-07-16** —
   `AI/MLOps`, confirmed.
8. ~~Confirm categories for LMS and Corporate Vendor & Contract Management
   System~~ **RESOLVED 2026-07-16** — LMS → `Web`. Corporate Vendor & Contract
   Management System → `Web` + `Systems` (multi-category, corrected from the
   earlier `Web`-only default).
8a. Shuttle Bot's one-line description — new gap, 2026-07-16. The
    implementation-plan summary for it is explicitly **not** approved for use;
    needs Sara's sign-off before `data/projects.ts` ships with real copy for
    it. Slug/dates/stack/category can land now, `summary` stays a flagged TODO
    until then.
9. ~~Confirm QuickAid's fuller technical detail...~~ **RESOLVED 2026-07-16** —
   confirmed accurate, the face recognition work is hers. See "Project content &
   attribution rules" above for the exact scope statement and the
   no-teammate-names / no-Missing-Persons-Module / no-hedging rules that now
   govern how QuickAid (and every other team project) gets written.
10. Confirm dropping "Fake News Detection" (DVC/MLflow/scikit-learn) — it was
    project #3 in CLAUDE.md v1 but isn't in the 8-project list from the
    implementation plan. Intentional, or an oversight? **Still outstanding —
    not addressed in the 2026-07-16 content answers, treated as dropped for
    now since the 8-project roster is otherwise fully confirmed.**
11. ~~Phone number~~ **RESOLVED 2026-07-16** — keep it, real channel. See "Phone
    & WhatsApp". The specific digits (+92 311 9806354) are carried forward from
    `docs/old-portfolio.html`, not restated in this session — worth a quick
    reconfirm that they're still current.
12. ~~Location precision~~ **RESOLVED 2026-07-16** — "Islamabad, Pakistan."
    (Not the old site's neighborhood-level "G10, Islamabad, Pakistan.")
13. ~~Experience section content~~ **RESOLVED 2026-07-16** — one entry only,
    see "Experience" above. Confirmed no other real roles exist; do not pad it.
14. At least one real blog post, or confirm shipping the blog index empty at
    launch (explicitly allowed by the implementation plan). **Still
    outstanding.**
15. Showcase section: `docs/old-portfolio.html` has real certifications/
    achievements (Fauji Foundation Scholarship, KIPS Certificate of Merit, A+
    FYP-1, Coursera/MLOps/UX coursework certs) — proceeding to reuse these as
    of 2026-07-16 (not explicitly objected to across two sessions now), still
    flagged here in case that's wrong.

## Decisions Log
- **2026-07-16** — Dropped the 19 July deadline; no external constraint requires
  it, build properly instead of against a date. This unlocked every scope reversal
  below.
- **2026-07-16** — Re-added shadcn/ui, scoped strictly to Radix-backed primitives
  (Dialog, Command, DropdownMenu, Popover, Tooltip, Sheet, Sonner, Form, Input,
  Label, Button). Reason: correct focus traps/keyboard/ARIA behavior is hard to
  hand-roll correctly and the a11y goals need it. Mandatory retheme of every CSS
  var immediately after `shadcn init` — no default zinc/slate tokens may survive.
- **2026-07-16** — Swapped DM Sans/DM Mono for Geist/Geist Mono (body/UI + code).
  Playfair Display stays for display type — that's the differentiator and doesn't
  move.
- **2026-07-16** — Reinstated `feature/*` branch + CI-gated workflow (was "commit
  straight to main" as of the previous session). No deadline means the overhead is
  worth it; git history is part of the deliverable recruiters read.
- **2026-07-16** — Full scope restored: blog/MDX, ⌘K command palette, GitHub
  contribution graph, dynamic OG images, and a full Vitest/Playwright/axe-core test
  suite are back in. All were cut only for time; time is no longer the constraint.
- **2026-07-16** — Banned emoji accents outright and banned the role-rotator +
  terminal-status-widget Hero pattern, overriding specific guidance in
  `docs/PORTFOLIO_IMPLEMENTATION_PLAN.md` and `docs/PROMPT_2_SONNET_IMPLEMENTATION.md`.
  Both are named as overused dev-portfolio tropes; Hero motion is capped at
  aurora/gradient + staggered reveal.
- **2026-07-16** — Corrected the stale "final-year student / graduating 2026"
  framing across bio, status line, and education card. Sara has graduated — BS CS,
  FAST-NUCES, 2022–2026, complete.
- **2026-07-16** — Project roster replaced: the 8-project list from
  `docs/PORTFOLIO_IMPLEMENTATION_PLAN.md` §9 supersedes the 4-project list in
  CLAUDE.md v1. "Fake News Detection" (v1's project #3) is not in the new list —
  flagged in Content Gaps rather than silently dropped.
- **2026-07-16** — Recorded actual installed Next.js version (16.2.10) as the
  tech-stack source of truth over every doc's "Next.js 15" — the repo's
  `package.json` is ground truth, the docs are stale.
- **2026-07-16** — Proposed light-mode palette tokens (not supplied by Sara) as a
  starting point derived from the locked dark palette; marked provisional pending a
  real contrast check in the design-tokens task.
- **2026-07-16** — docs/ formally demoted to reference-only. This file (CLAUDE.md)
  is the sole source of truth for every future session; on any conflict, CLAUDE.md
  wins, no exceptions.
- **2026-07-16** — Resolved Content Gap #9: QuickAid's offline face recognition
  (TFLite + MobileFaceNet) is confirmed as Sara's own work. Established a
  site-wide attribution policy alongside it: no teammate names, no supervisor/
  roll/section numbers, no hedging language on her own confirmed scope, and the
  Missing Persons Module (someone else's part of QuickAid) is excluded entirely
  rather than mentioned and reassigned. QuickAid's exact scope statement is now
  canonical, see "Project content & attribution rules".
- **2026-07-16** — Simplified the attribution rule above same-day: it was
  overcorrecting and made the site read defensively. Dropped "Team of N"
  disclosure entirely and dropped the "My Role"/"My scope" module-list format
  from both the rule and the case-study template. Projects are now described by
  what they are and how they were built, not by who did which piece. The
  no-teammate/no-supervisor/no-roll-number rule is unchanged. The Missing
  Persons Module still never appears, but the reasoning changed: it's excluded
  because it can't be explained in interview depth, not because of attribution
  — that's now the actual test for what any team project includes.
- **2026-07-16** — Added phone/WhatsApp as a real contact channel (recruiters in
  Pakistan often reach out on WhatsApp first). Scoped tightly: Contact section
  only, `tel:` + click-to-copy + `wa.me` link, explicitly excluded from
  `EmailWidget`, the footer, and the JSON-LD `Person` schema (structured data is
  scraper-facing, the number is human-facing only). `Profile` type gained
  `phone` and `whatsappUrl`.
- **2026-07-16** — Resolved Content Gaps #6 (no portfolio self-link, old
  `sara-jabeen.vercel.app` never referenced), #7 (Shuttle Bot → `AI/MLOps`), #8
  (LMS → `Web`; Corporate Vendor & Contract Management System → `Web` +
  `Systems`, corrected from an earlier `Web`-only default), #11 (keep phone),
  #12 (location: "Islamabad, Pakistan"), #13 (Experience ships with exactly one
  entry, Freelance Technical Content Writer, explicitly labeled as not
  software-engineering experience, five named clients). Opened a new gap, #8a:
  Shuttle Bot's one-line description is explicitly not yet approved for use and
  needs sign-off before it ships — `data/projects.ts` carries its slug/dates/
  stack/category now but leaves `summary` as a flagged TODO.

## Deployment status — READ THIS FIRST
No git remote exists yet (`git remote -v` is empty as of 2026-07-16). The repo
is 100% local. `.github/workflows/ci.yml` cannot run — GitHub Actions requires
a GitHub remote — so CI is currently decorative, not actually gating anything,
despite every commit message implying otherwise. No Vercel project is
connected either. Creating the GitHub repo and connecting Vercel both require
Sara's browser/account action (no `gh`/`vercel` CLI available, no API token) —
exact steps were handed to her 2026-07-16, still pending as of the last
session. **Do not claim CI is green or a deploy is live until this is verified
against the actual remote**, not assumed from local passes.

## Progress / TODO
- [x] Repo scaffold (Next.js 16 + TS + Tailwind v4 via `create-next-app`) —
      pre-existing, unchanged this session
- [x] Phase 0 — branch hygiene (`master` → `main`), docs committed
- [x] Phase 0 — tooling baseline: shadcn init + retheme (zero default tokens
      survive, verified by grep), Framer Motion, Lucide, Simple Icons,
      next-themes, MDX, RHF+Zod+Resend, Vitest+RTL, Playwright+axe-core, CI
      workflow. `tsc --noEmit`, `eslint`, `next build`, `vitest run`, and
      `playwright test` (2 smoke tests: page loads, zero axe violations) all
      green locally. CI itself unverified on a remote — see Deployment status.
- [ ] **BLOCKED ON SARA** — create GitHub remote, verify CI goes green there,
      connect Vercel, confirm a preview deploy builds.
- [x] Phase 1 — `/types` (committed)
- [x] Phase 1 — `/data` layer — profile, education, experience, skills, stats,
      showcase, and projects all built and committed 2026-07-16.
      `projects.test.ts` data-integrity suite passing (8 unique slugs, valid
      categories, exactly 3 featured with resolvable MDX paths). Shuttle Bot's
      `summary` is a loud `TODO(content-gap-8a)` string, not real copy — must
      be replaced before Phase 6/7 render it to a visitor. Résumé PDF,
      screenshots, and Ad Creative Generator/SmartWait `result` metrics remain
      genuinely blocked on Sara (Content Gaps #1, #2a, #3).
- [ ] Phase 2 — design tokens (Tailwind `@theme`, fonts, light-mode contrast check)
- [ ] Phase 2 — root shell: Navbar, Footer, ThemeToggle, EmailWidget mount, palette
      shell
- [ ] Phase 3 — Hero + StatCounter
- [ ] Phase 4 — About + EducationCard + AreaOfInterestTag
- [ ] Phase 5 — Experience (blocked on Content Gaps item 13)
- [ ] Phase 6 — Skills with real logos
- [ ] Phase 7 — Case study filter/search + 3 MDX case studies (blocked on Content
      Gaps items 2-3) + 5 standard cards
- [ ] Phase 8 — Showcase (pending Content Gaps item 15 confirmation)
- [ ] Phase 9 — Contact API + form + EmailWidget behavior (blocked on Content Gaps
      item 4)
- [ ] Phase 10 — Command palette
- [ ] Phase 11 — Blog (can ship empty per plan; blocked on item 14 for real
      content)
- [ ] Phase 12 — GitHub graph (blocked on Content Gaps item 5)
- [ ] Phase 13 — SEO: sitemap, robots, JSON-LD, dynamic OG
- [ ] Phase 14 — Accessibility + responsive pass
- [ ] Phase 15 — Test suite (unit, e2e, a11y) wired into CI
- [ ] Phase 16 — 404, polish, README + CI badge, deploy
