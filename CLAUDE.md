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
BS Computer Science, FAST-NUCES Islamabad — **final semester, expected graduation
December 2026**. Degree started 2021. Open to full-stack / software engineering
roles (remote or Islamabad-based).
- GitHub: github.com/sara-jabeennn (three n's — correct, not a typo)
- LinkedIn: linkedin.com/in/sara-jabeen-1b6876243
- Email: syedajabean@gmail.com
- Phone: +92 311 9806354, Contact section only, see "Phone & WhatsApp" below.
- Location: G10, Islamabad, Pakistan.
- No portfolio self-link anywhere. `sara-jabeen.vercel.app` is the **old**
  portfolio this site replaces — never link it, not in data, not in socials, not
  in JSON-LD.

**NEVER use the word "graduated" anywhere on the site or in data. She is NOT
graduated — CLAUDE.md itself said so incorrectly earlier this session (see
Decisions Log, this is a corrected instruction I got wrong, not a stale doc
issue). Every "final-year student" / "graduating 2026" phrasing in `docs/` is
ALSO stale in the other direction (wrong year) — the current, correct, and only
authoritative status is "final semester, expected graduation December 2026,"
degree started 2021.**

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
FAST-NUCES Islamabad · BS Computer Science · 2021 – December 2026 (expected) ·
**final semester, not yet complete**. Focus: full-stack development,
AI-integrated applications. No GPA, no percentage, no roll number, no section
— that's transcript material, not portfolio material.

### Experience (one real entry — do not pad it)
**Freelance Technical Content Writer** — remote, international clients, Sep
2024 – May 2025. Wrote for clients across technology, wellness, finance, and
academia: Ranklogs, Finocircle, Fitspresso — three clients, confirmed against
her CV. Named clients are fine
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

### Palette — wine/plum/charcoal/off-white (replaced the peach palette entirely, 2026-07-16)
| Role | Dark | Light | Use |
|---|---|---|---|
| bg | `#1A1A1A` | `#F7F5F6` | page background |
| surface | `#252525` | `#FFFFFF` | cards/popovers |
| text | `#F1F2F2` | `#1A1A1A` | body text |
| muted text | `#A3A0A1` | `#6B6567` | secondary text |
| text-safe wine (`--primary`) | `#D0839B` | `#8B3D55` | links, active states, numbers, small UI — verified AA |
| text-safe plum (`--chart-2`) | `#B080AA` | `#5E2C4E` | secondary emphasis — verified AA |
| deep wine (`--color-wine`) | `#8B3D55` | `#8B3D55` | **decorative only** — gradients, glows, particles, borders, button backgrounds |
| deep plum (`--color-plum`) | `#5E2C4E` | `#5E2C4E` | **decorative only** — same as above |

**Verified WCAG contrast ratios** (relative-luminance formula, computed not eyeballed):
- Dark: text/bg 15.52:1 · text/surface 13.67:1 · wine-tint/bg 6.13:1 · wine-tint/surface 5.4:1 · plum-tint/bg 5.4:1 · plum-tint/surface 4.75:1 · muted/bg 6.71:1 · muted/surface 5.91:1 · off-white-on-deep-wine (button text) 6.46:1
- Light: text/bg 16.03:1 · deep-wine/bg 6.68:1 · deep-wine/surface(white) 7.25:1 · deep-plum/bg 9.94:1 · deep-plum/surface(white) 10.79:1 · muted/bg 5.25:1 · muted/surface 5.7:1
- All pass AA (≥4.5:1 normal text). The deep originals (`#8B3D55`/`#5E2C4E`) **fail** AA as dark-mode text (2.4:1 / 1.61:1) — that's exactly why `--primary`/`--chart-2` hold the lighter tints in dark mode and the deep originals only in light mode (where they pass), never the reverse.
- `--primary` does double duty deliberately: it's the text-safe variant in whichever theme it's rendered in, **and** the button-background color, with `--primary-foreground` chosen to contrast against it (dark bg text on the light tint in dark mode, light text on the deep original in light mode). No separate "text accent" token needed.

Mint `#7dd3c0` and lilac `#c9a0dc` are dropped entirely — replaced by the
text-safe plum tint above. NOT indigo `#4F46E5`, NOT `#09090B` (from
`docs/strategy-plan.md`, already rejected) — unaffected, still wrong for the
same reasons as before.

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
- **`ShowcaseEntry.type` "certification" means an external body issued it**
  (Coursera, a university, a certifying org). Coursework is `"coursework"` —
  never relabel one as the other, they mean different things to a recruiter.
- **No profile-URL fallback for a project's GitHub link, ever.** If a project
  has no confirmed repo, `links.github` is omitted entirely and `ProjectCard`
  must render no GitHub button for it — not a button pointing at the profile.
  A recruiter clicking "GitHub" and landing on a profile instead of a repo is
  worse than no link at all. This must be enforced in `ProjectCard` itself
  (Phase 7), not just by omitting the field in data — see the regression this
  caused in the 2026-07-16 Decisions Log.

### Project GitHub links (canonical — confirmed 2026-07-16)
| Project | Repo |
|---|---|
| QuickAid | github.com/sara-jabeennn/QuickAid-FYP |
| E-Commerce Ad Creative Generator | github.com/sara-jabeennn/ecommerce-ad-generator |
| Fake News Detection | github.com/sara-jabeennn/fake-news-detection |
| Learning Management System | github.com/sara-jabeennn/Homeschooling-web |
| Advanced Classroom Management System | github.com/sara-jabeennn/classroom-management-system |
| My Beauty Assistant | github.com/sara-jabeennn/my-beauty-assistant |
| Corporate Vendor & Contract Management System | github.com/sara-jabeennn/vendor-contract-management-system |
| SmartWait | **none — no button** |
| Shuttle Bot | **none — no button** |

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

9 projects + category filter (`All · Web · Mobile · AI/MLOps · Design/UX ·
Systems`), **merged into the homepage** at `#case-studies` (2026-07-16 — reverses
the earlier "routed `/case-studies` page" decision, see Decisions Log) · 3 MDX
case studies still to write (QuickAid, E-Commerce Ad Creative Generator,
SmartWait — `/case-studies/[slug]` route reserved for these, not built yet) · 6
standard project cards, each linking to GitHub only if a real repo exists
(SmartWait and Shuttle Bot have none — no button renders for either, ever
falling back to the profile URL) · About + Education + Areas of Interest ·
Experience · Skills with real tech logos · Showcase · **working Contact form
(Resend) — done** · floating EmailWidget · ⌘K command palette (shell only,
actions not wired) · **Blog — basic index + MDX template done**, tags/syntax
highlighting/reading-progress/RSS not yet built · GitHub contribution graph +
latest repos (server-cached, token server-only) — not started · dynamic OG
images (`next/og`) — not started · sitemap · robots.txt · JSON-LD — not started
· custom 404 — not started · light/dark theme — done · full accessibility pass
· Vitest + RTL + Playwright + axe-core test suite gating CI.

Out of scope, explicitly post-submission: custom domain. (Everything else that was
previously cut for time — blog, MDX, ⌘K, GitHub graph, dynamic OG — is back in, per
the 2026-07-16 scope reversal. The RAG "Ask about Sara" chatbot from
`docs/strategy-plan.md` was never re-added and stays out unless explicitly
requested.)

## Folder structure
```
app/
  Home, About, Experience, Skills, Showcase, and Contact are anchored sections
  on one scrolling page (app/page.tsx). Case Studies and Blog are standalone
  routed pages. Locked in Phase 2 (feature/root-shell), matches the
  implementation plan's nav model exactly.
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
  matches its type, 9 unique slugs, every category ⊆ the 5-value
  `CaseStudyCategory` enum — `All` is a UI filter state, not a stored category
  — every featured project has a resolvable MDX path, no project's `links.github`
  is ever the bare profile URL).
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
1. ~~Résumé/CV PDF~~ **RESOLVED 2026-07-16 (session 6)** — real PDF landed at
   `public/resume/Sara_Jabeen_CV.pdf` (found at `public/Sara Jabeen-C.V..pdf`,
   moved to the wired path). Download CV button is live via a real
   `fs.existsSync` check (`lib/resume.ts`), not a hardcoded flag.
2. Case-study depth for the 3 featured projects: architecture notes/diagram, 2-3
   key technical decisions + why, one honest "what I'd do differently" line.
   QuickAid's is canonical (see "Project content & attribution rules"). Ad
   Creative Generator and SmartWait still need theirs. **Still outstanding.**
2a. `result` metrics for Ad Creative Generator and SmartWait specifically —
    QuickAid is exempted, already canonical without one. **Still outstanding,
    genuinely blocked on Sara — do not invent a number.**
3. Screenshots / demo GIFs for case studies. **Still outstanding.**
4. ~~`RESEND_API_KEY`~~ **RESOLVED 2026-07-16 (session 6)** — key and
   `CONTACT_TO_EMAIL` are in `.env.local` (moved from `data/.env.local`, where
   Next.js would never have read them, to the project root). Contact form is
   built and working. Still sending from Resend's sandbox address
   (`onboarding@resend.dev`) — a verified sending domain is a separate,
   still-open gap if a custom "from" address matters.
5. `GITHUB_TOKEN` (fine-grained PAT, public-repo read scope is enough) for the
   contribution graph. **Still outstanding.**
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
    until then. **Constraint added 2026-07-16 (session 6):** her CV calls this
    a concept — whatever description eventually ships must say
    concept/prototype and must never imply it shipped.
9. ~~Confirm QuickAid's fuller technical detail...~~ **RESOLVED 2026-07-16** —
   confirmed accurate, the face recognition work is hers. See "Project content &
   attribution rules" above for the exact scope statement and the
   no-teammate-names / no-Missing-Persons-Module / no-hedging rules that now
   govern how QuickAid (and every other team project) gets written.
10. ~~Confirm dropping "Fake News Detection"~~ **RESOLVED 2026-07-16 (session
    2) — it was never actually authorized to drop.** Restored: Sep–Oct 2025 ·
    `AI/MLOps` · DVC + MLflow + scikit-learn, not featured, real repo linked
    (see "Project GitHub links" above). See the Decisions Log entry the same
    day for exactly how this regression happened — it's a drift case study,
    not just a fix.
11. ~~Phone number~~ **RESOLVED 2026-07-16** — keep it, real channel. See "Phone
    & WhatsApp". The specific digits (+92 311 9806354) are carried forward from
    `docs/old-portfolio.html`, not restated in this session — worth a quick
    reconfirm that they're still current.
12. ~~Location precision~~ **RESOLVED 2026-07-16, then REVISED 2026-07-16
    (session 6)** — first resolved to "Islamabad, Pakistan," then her CV
    corrected it back to the neighborhood-level "G10, Islamabad, Pakistan"
    after all. Current and final: **G10, Islamabad, Pakistan.**
13. ~~Experience section content~~ **RESOLVED 2026-07-16** — one entry only,
    see "Experience" above. Confirmed no other real roles exist; do not pad it.
14. At least one real blog post. `/blog` and `/blog/[slug]` are built
    (2026-07-16 session 6) and ship a real "no posts yet" empty state rather
    than a 404 — explicitly allowed to launch this way. **Still outstanding**
    for actual post content.
16. Two projects from her CV aren't on the site yet: **Stock Prediction
    System** (Jenkins, Docker, CI/CD, Webhooks, Multi-Branch Deployment) and
    **Servisync** (JavaFX, OOP, Database Systems, Design Patterns, RBAC).
    Flagged 2026-07-16 (session 6) — do not add to `data/projects.ts` until
    Sara gives repo URLs and dates for both.
15. ~~Showcase section~~ **RESOLVED 2026-07-16 (session 4)** — all 7 entries
    confirmed, kept. Types corrected: MLOps Intensive Coursework and UX
    Engineering Coursework are `coursework` (not `certification` — no external
    body issued them), dated 2021-01. University Technical Projects &
    Collaboration is also `coursework`, dated 2026. Google Sheets/Coursera
    stays `certification`, 2021-10 (Coursera did issue that one). See the
    certification-vs-coursework hard rule.

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
- **2026-07-16** — Locked the nav model: Home/About/Experience/Skills/Showcase/
  Contact as anchored sections on one scrolling page, Case Studies/Blog as
  routed pages. Matches the implementation plan, resolves the "TBD" left in
  the folder structure since Phase 0.
- **2026-07-16** — Discovered neither Lucide nor Simple Icons ships a LinkedIn
  brand mark in the installed versions (Simple Icons dropped it after a
  trademark enforcement request; Lucide never carried one). Rather than add a
  new icon dependency, `LinkedInGlyph` inlines the standard glyph locally in
  `components/icons`; GitHub renders via Simple Icons' `siGithub` the same
  way. `SocialLink.lucideIcon` renamed to `icon` to stop implying both were
  Lucide.
- **2026-07-16** — Fixed a real a11y bug the Phase 0 axe smoke test caught
  once the root shell mounted: shadcn's vendored `CommandDialog` rendered its
  sr-only `DialogHeader` as a sibling of `DialogContent` rather than inside
  it, leaving unlandmarked content in the DOM even while the palette was
  closed. Moved it inside `DialogContent` in `components/ui/command.tsx`.
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
- **2026-07-16 (session 2) — how Fake News Detection got dropped, in full,
  because this is exactly the drift the Decisions Log exists to catch:**
  CLAUDE.md v1 (Sara's own original file, before this project's first
  session) explicitly listed Fake News Detection as one of 4 featured
  projects — that was already a standing, explicit fact, not something that
  needed re-asking. When the roster was replaced with
  `docs/PORTFOLIO_IMPLEMENTATION_PLAN.md` §9's 8-project list earlier this
  session, that document simply didn't include it — an omission in a
  secondary planning doc, not a retraction by Sara. That got caught and
  flagged correctly, as Content Gap #10 ("intentional, or an oversight?").
  The mistake happened later: when Sara answered most of the other open
  gaps in a subsequent message and #10 wasn't among them, it got marked
  "treated as dropped for now since the 8-project roster is otherwise fully
  confirmed" — silence was read as resolution instead of leaving the gap
  genuinely open or asking again. Separately in that same pass, Shuttle
  Bot's category got confirmed (`AI/MLOps`), which is real and correct on
  its own — but combined with the premature #10 closure, the effect was
  that Shuttle Bot filled what should have been project #9's slot, and
  Fake News Detection silently stayed gone, because the roster was being
  built to a remembered count ("8 projects") rather than to whatever the
  actually-confirmed set added up to. **The generalizable failure: an
  unanswered flagged gap must stay open, never get silently resolved by
  absence of objection, and a project count should never be treated as a
  target to preserve — it's an output of the confirmed list, not an input
  to it.** Restored 2026-07-16 (session 3): Fake News Detection, Sep–Oct
  2025, `AI/MLOps`, DVC + MLflow + scikit-learn, not featured. Roster is
  now 9. Added a data-integrity test asserting no project's `links.github`
  is ever the bare profile URL, and a hard rule + `ProjectCard` acceptance
  criterion (see "GitHub links" above) so a missing repo renders no button
  rather than a misleading fallback — the same session surfaced that
  regression too, for a different reason (invented fallback rather than
  silently-resolved gap, but same root cause: a shortcut taken to make the
  data look complete instead of leaving an honest gap visible).

- **2026-07-16 (session 4)** — Corrected the degree duration everywhere: it's
  2021–2026, not 2022–2026. Every doc and data file had the wrong start year.
  Fixed in `data/education.ts`, the "Who I am" and "Education" sections above,
  and `TASKS.md`. Earlier Decisions Log entries that mention "2022–2026" are
  left as-is — they're an accurate record of what was believed at the time,
  not the current fact; this entry is the correction, not a rewrite of history.
- **2026-07-16 (session 4)** — Showcase confirmed in full: all 7 entries kept.
  Corrected 3 of them from `certification` to `coursework` (MLOps Intensive
  Coursework, UX Engineering Coursework, University Technical Projects &
  Collaboration) since none were issued by an external body — added
  `coursework` to `ShowcaseEntryType` and a hard rule that the two are never
  interchangeable. Content Gap #15 resolved.

- **2026-07-16 (session 5)** — Built Phase 3 through Phase 8 in one pass:
  Hero, About, Experience, Skills, Showcase, and the project case-study grid
  (filter + search), composed into `app/page.tsx`. Judgment calls made without
  stopping to ask, as instructed:
  - Kept the locked nav model (Case Studies as a routed `/case-studies` page)
    rather than folding the full filterable grid into the homepage, since an
    earlier session already decided and logged that architecture. Added a
    `FeaturedProjects` homepage teaser (3 featured cards + a link to the full
    grid) so "wire app/page.tsx composing all sections" and "Projects grid +
    filter" are both satisfied without contradicting the existing decision.
  - Discovered this simple-icons version has **no AWS glyph at all** (not a
    naming difference — genuinely absent). Dropped `AWS`'s `simpleIconSlug`;
    it renders text-only in Skills, same as any other non-brand entry.
  - Download CV renders as a disabled/gated affordance (`aria-disabled`,
    "Résumé coming soon") since `profile.resumeUrl` doesn't exist — wired, not
    faked, per instruction.
  - No MDX case-study routes yet — `caseStudyMdxPath` exists on the 3 featured
    projects' data but nothing consumes it. Building that route now would
    either 404 or require inventing case-study depth content that's still
    genuinely blocked (Content Gaps #2/#2a/#3).
- **2026-07-16 (session 6) — corrected "graduated," a mistake I (the
  assistant) made, not a stale-docs issue.** Earlier this session CLAUDE.md
  itself was written to say Sara had graduated. That was wrong and I own it —
  she is in her final semester, expected graduation December 2026, degree
  started 2021 (not 2022, also corrected — every doc and data file had the
  wrong start year). Fixed in `data/education.ts`, `data/profile.ts`
  (`status`), the "Who I am" and "Education" sections above, and added an
  explicit hard rule: never use the word "graduated" anywhere on the site.
  Résumé download is now wired to a real file (`public/resume/Sara_Jabeen_CV.pdf`,
  found misplaced at `public/Sara Jabeen-C.V..pdf` and moved) via an
  `fs.existsSync` gate, not a boolean flag.
- **2026-07-16 (session 6) — replaced the entire palette.** Peach/lilac/mint
  is gone; wine (`#8B3D55`)/plum (`#5E2C4E`)/charcoal (`#1A1A1A`)/off-white
  (`#F1F2F2`) is the palette now, with every text/surface pairing verified by
  a real WCAG contrast calculation (ratios recorded in the palette table
  above) rather than eyeballed. The deep originals fail AA as dark-mode text
  (2.4:1/1.61:1) so `--primary`/`--chart-2` hold lighter tints in dark mode
  and the deep originals only in light mode — verified, not assumed.
- **2026-07-16 (session 6) — reversed the routed-`/case-studies` architecture
  decision from session 5, same day it was made.** The full project grid +
  filter now lives inline on the homepage at `#case-studies`
  (`components/sections/CaseStudies.tsx`); `FeaturedProjects.tsx` and the
  routed `/case-studies/page.tsx` listing are deleted. The `/case-studies`
  route itself is kept free for `/case-studies/[slug]` MDX detail pages
  later. Nav "Case Studies" now anchors instead of routing. Logging this
  reversal explicitly rather than silently overwriting the earlier decision —
  same discipline as the Fake News Detection drift entry above.
- **2026-07-16 (session 6) — built Contact (form + API) and Blog (index +
  template), previously unbuilt despite nav links pointing at them.** Contact:
  server-side Zod validation, honeypot, 5-req/10-min per-IP rate limit, fails
  loudly (500 + logged error) if `RESEND_API_KEY`/`CONTACT_TO_EMAIL` are
  missing, Resend sends from its sandbox address pending a verified domain.
  Hit a real `@hookform/resolvers` 5.4.0 / zod 4.4.3 type-level incompatibility
  (the resolver's types hardcode zod's internal version literal at exactly
  `4.0.0`) — worked around with an `unknown`-cast, documented inline, not a
  runtime issue, no `any` used. Blog: `/blog` ships a real empty state, not a
  404; `/blog/[slug]` dynamically imports `content/blog/*.mdx` but Turbopack's
  static analysis fails the build outright against a truly empty directory,
  so `content/blog/_placeholder.mdx` exists solely to satisfy that (excluded
  from `getBlogSlugs()` by its leading underscore, delete on first real post).
  Also found `.env.local` sitting at `data/.env.local`, where Next.js would
  never read it — moved to the project root.
- **2026-07-16 (session 6) — ported animations from `docs/old-portfolio.html`
  per its actual line numbers, read in full first.** `ParticleField`
  (canvas + rAF star field, ~lines 834-866, same particle count/speed/link
  distance, recolored wine/plum, pauses on tab-hidden, off entirely under
  `prefers-reduced-motion`), the `body::before` noise/grain overlay
  (~line 40), `CardGlow` per-card radial glow (~lines 117-120, alternating
  wine/plum on `SkillGroup`/`ShowcaseEntry`), `ProjectCard`'s diagonal
  gradient sweep (~line 176, kept 1:1 rather than also stacking `CardGlow`
  onto it), the Contact section's radial glow (~line 241), and the hero
  scroll-pulse indicator (~lines 87-89). Added magnetic-hover
  (`MagneticButton`, wraps the Hero CTA) and scroll parallax on the hero
  gradient (`useScroll`/`useTransform`) as the two permitted extra effects.
  Did not port the typewriter or the custom cursor — both still banned.
- **2026-07-16 (session 6) — CV corrections.** Experience clients: Ranklogs,
  Finocircle, Fitspresso only — Mahamukti Yoga and SlimBoost Tea were never
  real, removed. Location: reverted to "G10, Islamabad, Pakistan" (see
  Content Gap #12). Shuttle Bot's still-pending description gained a
  constraint: her CV calls it a concept, so it must say concept/prototype
  whenever it's finally written. Two CV projects (Stock Prediction System,
  Servisync) flagged as Content Gaps #16/#17, not added — no repo URLs or
  dates yet. "Years Building" stat rechecked: unaffected by the graduation
  correction, it was only ever tied to project timeline.
- **2026-07-16 (session 6) — security check.** `.env.local` confirmed
  gitignored (both its original wrong location and the corrected one).
  Scanned full git history (`git log --all -p` and a per-blob scan across
  every commit) for the Resend key pattern `re_[A-Za-z0-9_]+` — zero matches,
  the key was never committed at any point.

## Deployment status — READ THIS FIRST
GitHub remote is live as of 2026-07-16 (session 2):
`https://github.com/sara-jabeennn/sara-jabeen-portfolio`, `main` pushed. CI
verified green against the actual remote, not assumed —
run https://github.com/sara-jabeennn/sara-jabeen-portfolio/actions/runs/29492292374,
all 16 steps (checkout, install, typecheck, lint, unit tests, build, Playwright
browser install, e2e+a11y tests) succeeded. Re-verify against the Actions tab
after any future push that touches CI-relevant config — don't assume it's
still green from this one recorded run.

Vercel is connected and deploying as of 2026-07-16 (session 6):
https://sara-jabeen-portfolio-swart.vercel.app/ — fetched and confirmed
rendering (Hero, About, Experience, Skills, Case Studies, Showcase, Contact,
Footer, nav all present). Auto-deploys from `main` on every push. Re-fetch
after any future push to confirm, don't assume it stayed green.

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
- [x] GitHub remote created and pushed, CI verified green on the actual
      remote (run 29492292374, all 16 steps) — 2026-07-16 session 2.
- [x] Vercel connected, confirmed rendering at
      https://sara-jabeen-portfolio-swart.vercel.app/ — 2026-07-16 session 6.
- [x] Phase 1 — `/types` (committed)
- [x] Phase 1 — `/data` layer — profile, education, experience, skills, stats,
      showcase, and projects all built and committed 2026-07-16.
      `projects.test.ts` data-integrity suite passing (9 unique slugs, valid
      categories, exactly 3 featured with resolvable MDX paths, no project's
      `links.github` is the bare profile URL). Fake News Detection restored
      2026-07-16 session 2 after being silently dropped — see Decisions Log
      for the full drift explanation. Real per-project GitHub repo links
      confirmed for 7 of 9 (see "Project GitHub links"); SmartWait and
      Shuttle Bot have no repo and render no GitHub button, enforced as a
      hard rule for the future `ProjectCard`. Shuttle Bot's `summary` is a
      loud `TODO(content-gap-8a)` string, not real copy — must be replaced
      before Phase 6/7 render it to a visitor. Résumé PDF, screenshots, and
      Ad Creative Generator/SmartWait `result` metrics remain genuinely
      blocked on Sara (Content Gaps #1, #2a, #3). `data/showcase.ts` is
      pending a full verbatim re-confirmation per Sara's audit request —
      treat every entry as unconfirmed until she responds, not as settled.
- [x] Phase 2 — design tokens: Playfair Display wired via `next/font`,
      `--font-heading` repointed from Geist. Wine/plum palette (both themes)
      verified against real WCAG contrast calculations 2026-07-16 session 6 —
      no longer provisional, see the palette table's ratio list.
- [x] Phase 2 — root shell: Navbar (anchored + routed links, active-section
      highlight, mobile menu), Footer (socials, no phone), ThemeToggle,
      EmailWidget (fully built, not just a shell - collapsed/expanded, copy,
      mailto, keyboard, reduced-motion), CommandPalette (shell only, Phase 10
      adds actions). `tsc`/`eslint`/`vitest`/`playwright`+axe/`next build` all
      green locally. Nav model locked (see Decisions Log).
- [x] Phase 3 — Hero (aurora gradient + staggered reveal, tech badges, gated
      Download CV) + StatCounter (requestAnimationFrame count-up,
      scroll-triggered). 2026-07-16 session 5.
- [x] Phase 4 — About + EducationCard (2021–2026, corrected) + AreaOfInterestTag.
- [x] Phase 5 — Experience (one entry, ExperienceCard).
- [x] Phase 6 — Skills with real Simple Icons logos (AWS has no glyph in this
      simple-icons version, renders text-only, same treatment as any other
      non-brand skill).
- [x] Phase 7 — Case study grid/filter/search, **merged into the homepage**
      at `#case-studies` 2026-07-16 session 6 (reverses the routed-page
      decision from session 5 - see Decisions Log). Featured sort first.
      `ProjectCard` renders a GitHub button only when a repo exists, never a
      profile fallback. **The 3 MDX case studies themselves are still not
      built** — still blocked on Content Gaps #2/#2a/#3 (case-study depth,
      result metrics, screenshots). `/case-studies/[slug]` route reserved but
      empty.
- [x] Phase 8 — Showcase (all 7 entries, confirmed 2026-07-16 session 4;
      types corrected certification→coursework session 4 revisit).
- [x] `app/page.tsx` composes Hero → About → Experience → Skills →
      CaseStudies → Showcase → Contact. Full homepage, nothing missing now.
- [x] Phase 9 — Contact API + form done 2026-07-16 session 6 (RHF+Zod client,
      server-side Zod, Resend, honeypot, rate limit, real loading/success/
      error states). EmailWidget was already done in Phase 2.
- [ ] Phase 10 — Command palette (shell exists, no actions wired yet).
- [x] Phase 11 (partial) — Blog index + MDX template done 2026-07-16 session
      6, real empty state not a 404. Tags/syntax-highlighting/reading-
      progress/RSS not built. No real posts yet (Content Gap #14).
- [ ] Phase 12 — GitHub graph (blocked on Content Gaps item 5).
- [ ] Phase 13 — SEO: sitemap, robots, JSON-LD, dynamic OG.
- [x] Phase 14 (partial) — Animations ported 2026-07-16 session 6:
      particle field, noise overlay, per-card glows, project hover sweep,
      contact glow, scroll indicator, magnetic CTA hover, hero scroll
      parallax. Full accessibility + responsive pass across every section
      still not done as a dedicated audit.
- [ ] Phase 15 — Test suite (unit, e2e, a11y) wired into CI — smoke-level
      coverage exists from Phase 0, full suite (filter logic, contact happy/
      error path, keyboard traversal, per-route axe) not built.
- [ ] Phase 16 — 404, polish, README + CI badge, deploy.
