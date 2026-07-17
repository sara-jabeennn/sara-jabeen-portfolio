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
- Location: Islamabad, Pakistan.
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

### Bio (About section source text — restored 2026-07-17 to the original
### 3-paragraph structure/voice from `docs/old-portfolio.html`, updated for
### current facts)
> I'm a final-semester CS student at FAST NUCES Islamabad with a passion for
> building systems that span the full stack — from Bluetooth mesh networks
> enabling disaster communication, to production-grade MLOps pipelines running
> on AWS EKS with Kubernetes.
>
> My work sits at the intersection of intelligent systems and great user
> experiences. I care about both the model accuracy and the interface that
> presents it. Whether it's a T5 transformer generating ad copy or a UX
> prototype reducing queue anxiety, I bring end-to-end ownership.
>
> I've shipped 11 projects across MLOps, full-stack web, mobile applications,
> and systems programming — always pushing to production-ready standards with
> Docker, CI/CD, and observability baked in.

("11" as of 2026-07-18, after Stock Prediction System and Servisync were
added — recompute if the roster ever changes, this is not auto-derived in
`data/profile.ts` the way the Stats numbers are.)

Freelance writing is **not** a 4th bio paragraph — it lives in an About
callout card instead, matching the old site's actual structure (a small
Institution/Achievement/Location/Freelance callout grid under the bio, not
prose).

### Areas of interest (tags, About section)
Full-Stack Development · Mobile Development · AI Integration · MLOps · UX Design ·
Systems Programming

### Education — full timeline, 3 entries (restored 2026-07-17 from
### `docs/old-portfolio.html`, real content she wrote, previously trimmed to
### one entry)
1. **FAST — National University of Computer & Emerging Sciences** · BS
   Computer Science · 2021 – December 2026 (expected) · **final semester, not
   yet complete**. Focus: Mobile App Dev, Web Dev, Data Visualization, MLOps,
   UX Engineering, Operating Systems, Computer Networks, Software Project
   Management.
2. **Punjab College for Women, Sargodha** · F.Sc. · 2021 · Physics,
   Chemistry, Mathematics.
3. **Comprehensive Girls High School, Sargodha** · Matriculation · 2019 ·
   Physics, Chemistry, Mathematics, Biology.

No GPA, no percentage, no roll number, no section on any of the three —
that's transcript material, not portfolio material. `data/education.ts` is
`Education[]`, not a single object.

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
(tech-stack logos) · next-themes · React Hook Form + Zod · Resend · pnpm ·
Vercel. *(MDX dropped 2026-07-19 — see Decisions Log — it was only there for
the case-study detail pages, which are no longer in scope.)*

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
Editorial, confident typography, generous whitespace. Section eyebrows (rule +
mono-uppercase label) and an italic Playfair accent on the closing phrase of
every section heading, per section — this is now the standard heading pattern,
not optional flourish.

Hero motion, revised 2026-07-17 (expanded from the original two-effect cap,
which was itself reversed — see Hard rules and Decisions Log): aurora/mesh
gradient with scroll parallax, staggered reveal, a role rotator on the
tagline, a terminal "current stack" widget, and magnetic hover on the primary
CTA. Every one of these respects `prefers-reduced-motion`.

## Hard rules
- NO custom cursor. Never set `cursor: none`. Non-negotiable. (`docs/old-portfolio.html`
  has a full custom-cursor implementation — do not port it, it's palette/personality
  reference only.)
- **Emoji: allowed on achievement-type Showcase cards and About's callout
  cards only** (🎓🏆📍✍️🏅📜⭐, matching `docs/old-portfolio.html`'s real
  usage) — reversed 2026-07-17, was an outright ban. Nowhere else on the site.
  Lucide/Simple Icons everywhere else.
- **Role rotator: allowed on the Hero tagline, reduced-motion aware** —
  reversed 2026-07-17, was banned as an overused trope. Cycles through her
  real self-described role phrases (`components/ui/RoleRotator.tsx`), static
  text under reduced motion.
- **Terminal-style "current stack" widget: allowed in the Hero** — reversed
  2026-07-17, was banned alongside the role rotator for the same reason.
  Lives in the Hero's bento right column (`components/ui/TerminalWidget.tsx`).
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

### Project GitHub links (canonical — confirmed 2026-07-16, all 8 re-verified
### live by direct fetch 2026-07-18, zero 404s, 2 more added)
| Project | Repo |
|---|---|
| QuickAid | github.com/sara-jabeennn/QuickAid-FYP |
| E-Commerce Ad Creative Generator | github.com/sara-jabeennn/ecommerce-ad-generator |
| Fake News Detection | github.com/sara-jabeennn/fake-news-detection |
| Learning Management System | github.com/sara-jabeennn/Homeschooling-web |
| Advanced Classroom Management System | github.com/sara-jabeennn/classroom-management-system |
| My Beauty Assistant | github.com/sara-jabeennn/my-beauty-assistant |
| Corporate Vendor & Contract Management System | github.com/sara-jabeennn/vendor-contract-management-system |
| Servisync — Service Management System | github.com/sara-jabeennn/SDA-project |
| SmartWait | **none — no button** |
| Shuttle Bot | **none — no button** |
| Stock Prediction System | **none — no button** |

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

11 projects, **merged into the homepage** at `#case-studies`, three-tier
hierarchy by default (2026-07-17, re-tiered again 2026-07-18 — see "Project
hierarchy" below and Decisions Log): `ProjectHeroCard` (QuickAid, `01`) →
`ProjectMediumCard` ×5 ("Work I'm proud of" — Ad Creative Generator, Fake News
Detection, LMS, Corporate Vendor & Contract Management, My Beauty Assistant,
`02`-`06`) → `ProjectCompactCard` ×5 ("More Projects" — SmartWait, Shuttle
Bot, Advanced Classroom Management, Stock Prediction System, Servisync,
`07`-`11`). Filtering or searching (category filter `All · Web · Mobile ·
AI/MLOps · Design/UX · Systems` + text search) switches to a flat animated
grid instead — a fixed hierarchy can't represent an arbitrary filtered subset
· each project's GitHub button renders only if a real repo exists
(SmartWait, Shuttle Bot, and Stock Prediction System have none — no button,
ever falling back to the profile URL) ·
Hero (two-column, bento identity/stat/terminal cards, role rotator) + Stats
strip + About (3-paragraph bio, education timeline, callout cards) + Skills
(size-varied cards) + Showcase (achievement tier louder than
coursework/certification tier) + Experience · **working Contact form (Resend)
— done** · floating EmailWidget · ⌘K command palette (shell only, actions not
wired) · GitHub contribution graph + latest repos (server-cached, token
server-only) — not started · dynamic OG images (`next/og`) — not started ·
sitemap · robots.txt · JSON-LD (`Person` only, no case studies left to give
a `CreativeWork`) — done 2026-07-19 · custom 404 — done 2026-07-19 ·
light/dark theme — done · full accessibility pass · Vitest + RTL + Playwright
+ axe-core test suite gating CI.

**Blog is explicitly out of scope** (removed 2026-07-17 — an empty blog read
as abandoned; she'll rebuild it when there are real posts).

**MDX case studies are dropped entirely, not deferred** (2026-07-19 — see
Decisions Log). The 3 case-study detail pages were still TODO shells with no
real architecture depth to put in them; shipping a route that 404s or reads
as a placeholder is worse than not having the route. `@next/mdx`,
`@mdx-js/*`, `mdx-components.tsx`, and every MDX config are removed —
nothing else needs MDX now that the blog is also gone. The "Case Studies"
section heading/nav label stays; it's just the projects section.

Out of scope, explicitly post-submission: custom domain, blog. (Everything
else that was previously cut for time — ⌘K actions, GitHub graph, dynamic OG
— is still coming, per the 2026-07-16 scope reversal. MDX case studies are
the one item that went from "still coming" to genuinely dropped, see above.
The RAG "Ask about Sara" chatbot from `docs/strategy-plan.md` was never
re-added and stays out unless explicitly requested.)

## Project hierarchy (Projects/Case Studies section)
Three visual tiers by design, not a uniform grid — ported from
`docs/old-portfolio.html`'s actual hierarchy, which visibly outranked its
featured project over everything else. Driven by `Project.visualTier`
(`"hero" | "prominent" | "compact"`) alone. *(`Project.featured` — "has an
MDX case study" — is gone as of 2026-07-19 along with the case studies
themselves; visual tier was always the only thing that decided this
hierarchy, so nothing here changes.)*

1. **Hero tier (`ProjectHeroCard`)** — QuickAid only. Full-width row, index
   `01`, "Final Year Project" badge, full summary, more padding/breathing
   room than anything else on the page, tilt-on-hover.
2. **Prominent tier (`ProjectMediumCard`)** — 5 projects ("Work I'm proud
   of," `02`-`06`): E-Commerce Ad Creative Generator, Fake News Detection,
   Learning Management System, Corporate Vendor & Contract Management,
   My Beauty Assistant. All 6 hero+prominent cards show a "View on GitHub"
   button — all 6 have confirmed real repos.
3. **Compact tier (`ProjectCompactCard`)** — 5 projects ("More Projects,"
   `07`-`11`): SmartWait, Shuttle Bot, Advanced Classroom Management System,
   Stock Prediction System, Servisync. Title + stack line + index only, plus
   a small GitHub link on the two that have real repos (Advanced Classroom
   Management, Servisync) — SmartWait, Shuttle Bot, and Stock Prediction
   System have none.

This is the **default** view only. The moment a category filter or search
query is active, `ProjectsExplorer` switches to the flat animated grid
(`ProjectCard`, uniform) instead — the tiered layout is fixed and can't
represent an arbitrary filtered subset.

## Folder structure
Revised 2026-07-19: Blog removed entirely, and MDX case studies dropped
outright (not deferred — see Scope and Decisions Log). No `/case-studies`
route, no `content/` directory, no MDX plumbing anywhere. "Case Studies" is
purely the anchored `#case-studies` homepage section.
```
app/
  page.tsx                     # Hero, Stats, About, Skills, CaseStudies, Experience, Showcase, Contact
  api/contact/route.ts
  api/github/route.ts           # server-side cached GitHub fetch, not built yet
  opengraph-image.tsx           # not built yet
  sitemap.ts / robots.ts / not-found.tsx  # done 2026-07-19
components/
  layout/     Navbar, Footer, ThemeToggle, ThemeProvider
  sections/   Hero, Stats, About, Skills, CaseStudies, ProjectsExplorer,
              ProjectsTiered, Experience, Showcase, Contact
  widgets/    EmailWidget, CommandPalette, ParticleField, ScrollProgress
  cards/      ProjectCard, ProjectHeroCard, ProjectMediumCard, ProjectCompactCard,
              ExperienceCard, EducationCard, ShowcaseEntry
  ui/         FilterBar, SkillGroup, AreaOfInterestTag, StatCounter, ContactForm,
              SectionHeading, RoleRotator, TerminalWidget, MagneticButton, CardGlow,
              CardSheen
  icons/      SimpleIconGlyph, LinkedInGlyph, simple-icons-map
  motion/     Reveal, CardReveal (whileInView wrappers, prefers-reduced-motion aware)
  visuals/    MeshDiagram (QuickAid's Bluetooth mesh/Dijkstra routing diagram)
data/
  profile.ts, education.ts (Education[], 3-entry timeline), experience.ts,
  projects.ts, skills.ts, stats.ts, showcase.ts
types/
  project.ts, experience.ts, skill.ts, education.ts, profile.ts, stats.ts,
  showcase.ts, contact.ts, index.ts
lib/
  schemas/contact.ts   # Zod schema, source of truth — ContactFormValues = z.infer<>
  rate-limit.ts         # in-memory per-IP limiter
  resume.ts              # fs.existsSync gate for the Download CV button
  format-date.ts
  bold-phrases.tsx
  github.ts              # server-only GitHub fetch + cache, not built yet
  site-config.ts          # SITE_URL, single source of truth for the canonical domain
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
shadcn `Command`, scoped actions: jump to any section (Home, About, Skills,
Case Studies, Experience, Showcase, Contact), jump to a specific project by
name, toggle theme, copy email. No Blog target — it's removed. This action
list is my own reasonable default, not specified verbatim anywhere in
`docs/` — amend freely.

## GitHub integration
Contribution graph + latest repos, fetched server-side with Next's fetch cache
(`revalidate`), `GITHUB_TOKEN` read only in a server context (route handler /
server component) — never shipped to the client bundle or exposed in any
client-visible request.

## Testing — gates CI, not optional
- **Vitest + React Testing Library:** filter logic, Zod schemas (contact + data),
  clipboard-copy behavior, data-integrity tests (every `data/projects.ts` entry
  matches its type, 11 unique slugs, exactly 1 hero + 5 prominent + 5 compact
  visual tiers, dateStart/dateEnd always both-present-or-both-absent, every
  category ⊆ the 5-value `CaseStudyCategory` enum — `All` is a UI filter
  state, not a stored category — no project's `links.github`
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
2. ~~Case-study depth for the 3 featured projects~~ **DROPPED 2026-07-19, not
   resolved** — MDX case studies are out of scope entirely now (see Scope and
   Decisions Log), so there's no longer a page for this content to go into.
   Ship nothing rather than a TODO page. Not a gap to revisit unless case
   studies come back into scope.
2a. ~~`result` metrics for Ad Creative Generator and SmartWait~~ **MOOT
    2026-07-19** — no `Project.result` field was ever added to the data
    layer (blocked on this exact gap), so there's nothing to remove. Same
    reasoning as #2: no case study, no result section to fill.
3. ~~Screenshots / demo GIFs for case studies~~ **DROPPED 2026-07-19** — not
   doing them; every project's repo link (where one exists) is the evidence
   instead. No image slots exist in `ProjectCard`/`ProjectHeroCard`/
   `ProjectMediumCard`/`ProjectCompactCard` to remove.
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
12. ~~Location precision~~ **RESOLVED 2026-07-16, revised twice, settled
    2026-07-17.** Went "Islamabad, Pakistan" → "G10, Islamabad, Pakistan" (per
    her CV) → back to **"Islamabad, Pakistan," final.** Three passes on one
    field — if it changes again, ask instead of guessing which direction.
13. ~~Experience section content~~ **RESOLVED 2026-07-16** — one entry only,
    see "Experience" above. Confirmed no other real roles exist; do not pad it.
14. ~~At least one real blog post~~ **MOOT 2026-07-17 — blog removed from
    scope entirely.** `/blog` and `/blog/[slug]` (built 2026-07-16 session 6)
    were deleted the next day; an empty blog read as abandoned. Rebuild when
    real posts exist — not a gap to track until then.
16. ~~Two projects from her CV weren't on the site~~ **RESOLVED 2026-07-18,
    dates gap closed 2026-07-19** — Stock Prediction System and Servisync are
    both in `data/projects.ts` (compact tier, `07`/`11`), repo confirmed for
    Servisync (`github.com/sara-jabeennn/SDA-project`, fetched live), Stock
    Prediction System confirmed to have no repo. Dates for both are no longer
    tracked as a gap — `dateStart`/`dateEnd` are optional on `Project`, no
    other compact-tier card shows dates either, and inventing a date to
    satisfy a required field would be exactly the fabrication this section
    exists to prevent.
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
- **2026-07-17 — location settled for real this time: "Islamabad, Pakistan,"
  not "G10, Islamabad, Pakistan."** Third pass on this one field (see Content
  Gap #12's full history). `data/profile.ts` never actually rendered location
  anywhere in the UI yet, so no component needed changing, only the data and
  this file.
- **2026-07-17 — reversed three of my own hard-rule bans, on instruction:
  emoji (achievement/Showcase/About-callout cards only, not everywhere else),
  the Hero terminal widget, and the Hero role rotator are all back in.**
  Reasoning given: they worked on the old site, and the ban was overcorrecting
  for genuinely overused tropes without weighing that this is her real,
  previously-shipped design. Custom cursor and `cursor: none` remain banned
  permanently — that wasn't in question. Updated the Hard rules section
  directly rather than leaving the old ban text next to a contradicting note.
- **2026-07-17 — full layout/hierarchy rebuild**, on the assessment that the
  uniform-grid design was flat next to the old site. Re-read
  `docs/old-portfolio.html` and ported its actual patterns instead of
  guessing: section eyebrows + italic-accent headings everywhere, a
  two-column Hero with a bento right column, a dedicated Stats strip, varied
  Skills card sizes, the full 3-paragraph About prose + 3-entry education
  timeline + emoji callout cards, a three-tier Projects hierarchy replacing
  the uniform grid as the default view, and a loud/quiet split on Showcase
  achievements vs. coursework. Full detail is in the Progress/TODO entries
  for Phases 3-8 above rather than duplicated here.
- **2026-07-17 — deleted the Blog entirely, one day after building it.** An
  empty blog with zero posts reads as an abandoned section, not a
  work-in-progress one. Removed `app/blog/`, `app/blog/[slug]/`,
  `lib/blog.ts`, `content/blog/`, `types/blog.ts`, and the nav link. MDX
  tooling (`next.config.ts`, `mdx-components.tsx`, the `@next/mdx` dependency)
  stays configured — it's still needed for the pending case-study detail
  pages, so removing it too would've been the wrong cut.
- **2026-07-17 — reordered the homepage.** Hero → Stats → About → Skills →
  Case Studies → Experience → Showcase → Contact, on the explicit reasoning
  that Experience is her weakest content and shouldn't lead. Nav reordered to
  match. Section background tints rebalanced to alternate consistently
  regardless of the new order (About/CaseStudies/Showcase plain,
  Skills/Experience/Contact tinted) rather than leaving three tinted sections
  in a row.
- **2026-07-18 — roster grown to 11, verified every canonical repo URL by
  actually fetching it rather than trusting the list.** All 8 previously-known
  repos plus Servisync's returned 200. Added Stock Prediction System (no
  repo, confirmed) and Servisync (repo confirmed) to `data/projects.ts` —
  their dates are genuinely unknown and left unset (`Project.dateStart`/
  `dateEnd` are now optional; `formatDateRange` returns `undefined` rather
  than guessing) instead of blocking the whole addition on a missing field.
- **2026-07-18 — split `featured` (case-study status) from a new
  `visualTier` field (hero/prominent/compact), after realizing the previous
  single `featured` boolean was being asked to mean two unrelated things at
  once.** Re-tiered the Projects display to hero(1)/prominent(5)/compact(5)
  to match — SmartWait moved to compact tier while keeping its case-study
  status, Fake News Detection moved to prominent tier without gaining one.
  `projects.test.ts` updated to assert both independently.
- **2026-07-18 — replaced the invented 7-category Skills list with her real
  8 categories from `docs/old-portfolio.html`.** The previous set was
  plausible-sounding but not what she actually wrote. Checked every skill
  individually against simple-icons rather than assuming coverage — Java,
  SQL, SQL Server, Canva, Adobe Photoshop, and Pencil have no glyph in this
  version, same absent-brand-icon pattern as AWS/LinkedIn from earlier
  sessions. Switched the section layout from a grid with a manual
  `col-span-2` hack to CSS columns + `break-inside-avoid`, which actually
  solves uneven-height orphan rows instead of just relabeling two categories
  as "wide" and hoping.
- **2026-07-18 — Stats rebuilt to 11/Years-Study/8/3, two of the four values
  now derived (`projects.length`, `skills.length`) instead of hardcoded,**
  so they can't drift out of sync with the roster again the way "Projects
  Shipped: 9" quietly went stale the moment the roster grew. Dropped every
  "+" suffix — every number on the strip is now something a visitor could
  count on the page and get the same answer.
- **2026-07-18 — card visual pass:** thicker (2px) borders sitewide (the
  previous 0.08-alpha dark border was reported as nearly invisible at rest,
  bumped to 0.16), a reusable `CardSheen` hover-sweep component applied to
  every card type (project, skill, achievement), achievement cards
  distinctly louder than coursework/certification cards (already split
  session 6, glow/sheen intensity reinforced it further), and staggered
  scroll-reveal added to the few grids that were still missing it (About's
  callouts, the education timeline, Experience entries, the flat filtered
  project grid).
- **2026-07-19 — dropped MDX case studies entirely, not deferred.** The 3
  detail pages had been reserved-but-empty since session 5/6 — the
  underlying content (architecture depth, "what I'd do differently," result
  metrics) was genuinely blocked on Sara and had been for multiple sessions
  with no sign of landing soon. Rather than keep carrying a route that would
  either 404 or ship as a TODO shell, cut it: removed `app/case-studies`
  (was reserved, never built, nothing to delete on disk), `content/`
  (empty), the `featured` and `caseStudyMdxPath` fields from `Project` and
  every entry in `data/projects.ts`, the two `projects.test.ts` assertions
  that depended on them, and all MDX tooling — `next.config.ts`'s
  `pageExtensions`/`createMDX` wrapper, `mdx-components.tsx`, and the
  `@next/mdx`/`@mdx-js/loader`/`@mdx-js/react`/`@types/mdx` dependencies
  (uninstalled via `pnpm remove`, not just deleted from `package.json`) —
  MDX had no remaining consumer once the blog was already gone. Judgment
  call beyond the literal ask: removed `featured` itself (not just
  `caseStudyMdxPath`), including the "Featured" star badge on `ProjectCard`
  and the featured-sorts-first behavior in `ProjectsExplorer`. `featured`
  was defined, in this file and in code comments, purely as "has an MDX
  case study" — with case studies gone, a badge claiming a project is
  "Featured" with nowhere to click through to would have been its own
  small dead-end, the same failure mode as a TODO page, just smaller. The
  "Case Studies" section heading and nav label stay; they now just name the
  projects grid. Also closed Content Gaps #2/#2a/#3 (case-study depth,
  result metrics, screenshots) as dropped rather than outstanding, and
  closed #16's dates sub-gap by making `dateStart`/`dateEnd` explicitly
  optional rather than continuing to track missing dates as a gap to fill.

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
      showcase, and projects all built 2026-07-16, roster grown to 11 and
      re-tiered 2026-07-18. `projects.test.ts` data-integrity suite passing
      (11 unique slugs, valid categories, exactly 1 hero + 5 prominent + 5
      compact visual tiers, no project's `links.github` is the bare profile
      URL — the `featured`/MDX-path assertions were removed 2026-07-19 along
      with the field itself, see Decisions Log). Fake News Detection
      restored 2026-07-16 session 2 after being silently dropped — see
      Decisions Log for the full drift explanation. Real per-project GitHub
      repo links confirmed for 8 of 11, all fetched live 2026-07-18 with zero
      404s (see "Project GitHub links"); SmartWait, Shuttle Bot, and Stock
      Prediction System have no repo and render no GitHub button, enforced as
      a hard rule in `ProjectCard`/`ProjectHeroCard`/`ProjectMediumCard`/
      `ProjectCompactCard`. Shuttle Bot's `summary` is a loud
      `TODO(content-gap-8a)` string, not real copy. Résumé PDF and Download CV
      are resolved (Content Gap #1); screenshots, Ad Creative Generator/
      SmartWait `result` metrics, and Stock Prediction System/Servisync dates
      remain genuinely blocked on Sara (Content Gaps #2a, #3, #16).
      `data/showcase.ts` is confirmed in full (Content Gap #15 resolved).
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
- [x] Phase 3 — Hero, rebuilt 2026-07-17 to a two-column layout: left =
      eyebrow, huge italic name, role rotator + tagline, area-of-interest tag
      pills, CTAs (magnetic "View Projects", gated Download CV). Right =
      bento grid (identity card, Projects Built stat, FYP-1 Grade, terminal
      "current stack" widget). Aurora gradient gained scroll parallax. Stats
      split out into its own section (`Stats.tsx`) right after Hero, big
      numerals via `StatCounter`'s new `large` variant.
- [x] Phase 4 — About, rebuilt 2026-07-17: full 3-paragraph bio restored
      (voice preserved, "11+ projects" corrected to 9, never says
      "graduated"), bold key phrases, 2-column layout (bio + 4 emoji callout
      cards left, 3-entry education timeline right). `data/education.ts` is
      now `Education[]`, not a single object.
- [x] Phase 5 — Experience (one entry, ExperienceCard), section-heading
      pattern applied 2026-07-17 ("Where I've *worked*").
- [x] Phase 6 — Skills, replaced 2026-07-18 with her real 8 categories from
      `docs/old-portfolio.html` (was an invented 7-category set). Real
      Simple Icons logos checked individually — Java, SQL, SQL Server, Canva,
      Adobe Photoshop, and Pencil confirmed to have no glyph in this version,
      render text-only. Layout switched from grid to CSS columns +
      break-inside-avoid (2026-07-18) — a `lg:col-span-2` hack couldn't
      actually prevent orphan rows with real content, columns can.
- [x] Phase 7 — Case study grid, **merged into the homepage** at
      `#case-studies` (session 6), given a **three-tier hierarchy**
      2026-07-17, **re-tiered again 2026-07-18** to hero(1)+prominent(5)+
      compact(5) driven by `visualTier` (see "Project hierarchy" above) —
      filtering or searching still falls back to the flat animated grid
      (`ProjectCard`). GitHub button only when a repo exists, never a
      profile fallback; all 8 confirmed URLs fetched live, zero 404s.
      **MDX case studies dropped entirely 2026-07-19** — `featured`,
      `caseStudyMdxPath`, the reserved `/case-studies/[slug]` route, and all
      MDX tooling/deps are gone, not just deferred. This phase is complete
      as scoped now: the section is the grid, full stop.
- [x] Phase 8 — Showcase (all 7 entries, confirmed session 4). Restyled
      2026-07-17: achievement-type entries render loud (bigger emoji, glow,
      hover lift), coursework/certification/collaboration render quiet —
      the hierarchy is visible at a glance now, not flat boxes.
- [x] `app/page.tsx` composes Hero → Stats → About → Skills → CaseStudies →
      Experience → Showcase → Contact (reordered 2026-07-17 — Experience no
      longer leads with her weakest content). Nav reordered to match.
- [x] Phase 9 — Contact API + form done 2026-07-16 session 6 (RHF+Zod client,
      server-side Zod, Resend, honeypot, rate limit, real loading/success/
      error states). EmailWidget was already done in Phase 2.
- [ ] Phase 10 — Command palette (shell exists, no actions wired yet).
- [x] Phase 11 — **Blog removed entirely 2026-07-17**, one day after being
      built. An empty blog read as abandoned. Not "deferred" — actively out
      of scope now, see Content Gap #14 and Scope above. **MDX tooling
      itself removed 2026-07-19** along with case studies — there was no
      remaining consumer once the blog was already gone.
- [ ] Phase 12 — GitHub graph (blocked on Content Gaps item 5).
- [x] Phase 13 (mostly) — `app/sitemap.ts`, `app/robots.ts`, `metadataBase`,
      and an inline `Person` JSON-LD (omits `telephone`, see "Phone &
      WhatsApp") landed 2026-07-19. No `CreativeWork` schema — moot now that
      case studies are dropped. Dynamic OG images still not started.
- [x] Phase 14 (mostly) — Animations ported 2026-07-16 session 6: particle
      field, noise overlay, per-card glows, project hover sweep, contact
      glow, scroll indicator, magnetic CTA hover, hero scroll parallax.
      2026-07-19 additions: `layoutId` sliding pill on `FilterBar`, `layoutId`
      underline on `Navbar`'s active section, a page-wide `ScrollProgress`
      bar, and a visibly-cranked `CardSheen` (see Decisions Log — the
      previous version was coded but not actually visible, verified by
      screenshot before and after). Full accessibility + responsive pass
      across every section still not done as a dedicated audit.
- [ ] Phase 15 — Test suite (unit, e2e, a11y) wired into CI — smoke-level
      coverage exists from Phase 0, full suite (filter logic, contact happy/
      error path, keyboard traversal, per-route axe) not built.
- [x] Phase 16 (partial) — Custom 404 (`app/not-found.tsx`) and basic
      security headers (`next.config.ts` — X-Content-Type-Options,
      X-Frame-Options, Referrer-Policy, Permissions-Policy) landed
      2026-07-19. README + CI badge + Lighthouse pass still not done.
