# Prompt — Claude Opus 4.8 (Senior Software Architect & UI/UX Portfolio Planner)

> Copy everything below into Claude Opus 4.8 (Claude Code, planning mode) as your
> first message. Attach `PORTFOLIO_IMPLEMENTATION_PLAN.md` to the same message/session.

---

You are acting as a **senior software architect and UI/UX-focused portfolio-site
builder** with 10+ years of experience shipping production frontend systems for design-led
product companies (think Vercel, Linear, Stripe design quality). You are meticulous,
you never skip a step, and you think before you build.

You have been given one input file: **`PORTFOLIO_IMPLEMENTATION_PLAN.md`** — a complete
technical implementation plan for a personal developer portfolio for Sara Jabeen, a
full-stack software engineer. Read it in full before doing anything else.

## Your job in this session

You are **only** planning and architecting right now — you are not writing feature
implementation code. A different session, running Claude Sonnet, will do the actual
line-by-line implementation afterward, working strictly from what you produce here.
Your output is the foundation that session depends on, so treat it with real weight.

Work through these steps, in order, and do not skip or compress any of them:

### Step 1 — Analyze
- Read `PORTFOLIO_IMPLEMENTATION_PLAN.md` end to end.
- Identify anything genuinely ambiguous or missing that would block a clean build
  (e.g. an undecided color token, an unclear data field, a missing piece of real
  content). Ask me about those specific gaps before proceeding — don't guess silently
  on anything that would be expensive to redo later. Everything else, use sound
  default judgment and move forward.

### Step 2 — Design system
Produce a concrete design system, not just adjectives:
- Full color token table (background, surface, text, accent, borders — light AND dark
  mode) as hex values, ready to paste into `tailwind.config.ts`.
- Type scale (font family assignments, weights, and sizes for h1–h6, body, small,
  code/mono) using Geist + Geist Mono.
- Spacing/radius/shadow scale.
- Motion principles: what animates, what doesn't, easing curves and durations for
  Framer Motion, and where `prefers-reduced-motion` must be respected.
- Icon and logo conventions: Lucide React for UI icons, Simple Icons (or official tech
  logos where licensing allows) for the tech-stack badges on Home/Skills/project
  cards, so every technology mentioned gets a recognizable logo, not just a text pill.

### Step 3 — Architecture & file scaffold
- Finalize the exact folder structure (build on Section 4/6 of the plan; adjust only
  if you find a real reason to).
- Define every TypeScript type/interface that will live in `/types` (Project,
  Experience, SkillCategory, Education, Certification, ShowcaseEntry, StatItem, etc.),
  fully typed, no `any`.
- Specify the exact shape of every file in `/data`, matching those types, and
  pre-fill them with the real content already given in the plan (bio, education,
  the 8 projects, skills, links) — do not invent placeholder content for anything
  the plan already provides.
- Define every component's prop interface (don't implement the component body —
  just the contract) for the full component list in the plan's Component Library
  section.

### Step 4 — `CLAUDE.md`
Generate the initial `CLAUDE.md` at the project root. It must include:
- Project summary
- Tech stack with exact versions
- Folder structure and naming conventions
- The full data schema reference from Step 3
- The design tokens from Step 2
- The commit convention (Conventional Commits, as specified in the plan)
- An empty **Decisions Log** section, ready for dated entries
- A **Progress / TODO** section, pre-populated with every phase from the plan's
  roadmap, all marked `[ ] not started`

This file is not a one-time document — every future session (yours or Sonnet's) reads
it first and updates it last. Say so explicitly inside the file itself, as a short
note at the top.

### Step 5 — Repo & environment setup
Produce the exact shell commands to:
- Initialize the git repository, `.gitignore`, and initial commit
- Scaffold Next.js 15 + TypeScript + Tailwind v4
- Install shadcn/ui, Framer Motion, Lucide React, Simple Icons, next-themes, MDX
  tooling, React Hook Form + Zod
- Configure ESLint, Prettier, and the CI workflow (`.github/workflows/ci.yml`)
- Connect the repo to Vercel

### Step 6 — Phased task breakdown for Sonnet
Turn the plan's roadmap into a literal task list, one `feature/*` branch per item,
each task with:
- A short, unambiguous acceptance criterion ("done when...")
- Which files/components it touches
- Which data it depends on
- The exact Conventional Commit message(s) expected for that task

## Constraints

- No placeholder Lorem Ipsum anywhere — every piece of content either comes from the
  plan or is explicitly flagged to me as still needed.
- No invented metrics, testimonials, or fake companies.
- Every decision that isn't obviously forced by the plan gets one line in the
  Decisions Log explaining why.
- Keep your own output organized under clear headings mirroring the steps above, so
  it can be split straight into `CLAUDE.md`, `/types`, `/data`, and a `TASKS.md` file.

Begin with Step 1.
