# Portfolio — Technical Implementation Plan
### Sara Jabeen — Full-Stack Software Engineer
Frontend-only data · 100% Vercel deployment · AI-assisted build workflow

LinkedIn: https://www.linkedin.com/in/sara-jabeen-1b6876243/

> This file is the build spec. Claude Code should read it fully before writing any code,
> use it to generate `CLAUDE.md` (see Section 3), and keep both files in sync as the
> project progresses.

---

## 1. Overview & Architecture Model

The portfolio is a **fully static, frontend-only application**. There is no external
database and no CMS — every piece of content (bio, education, experience, projects,
skills, certifications) lives in typed data files inside the repository. The only
server-side piece is optional (a Vercel serverless function for the contact form);
everything else, including the floating email widget, is pure client-side.

**Deployment target:** Vercel, connected directly to the GitHub repository, so every
push to `main` triggers a production deploy and every pull request gets its own preview URL.

### Navigation

```
Home | About | Experience | Case Studies | Skills | Showcase | Contact | Blog
```

Home, About, Experience, Skills, Showcase, and Contact are anchored sections on one
scrolling landing page. Case Studies and Blog are standalone routed pages. The floating
email widget persists across all routes.

---

## 2. Modern Tech Stack (Frontend-Only)

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router), fully static export / SSG where possible |
| UI Library | React 19 |
| Language | TypeScript throughout — components, data files, content schemas |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React + Simple Icons |
| Fonts | Geist (display) + Geist Mono (terminal widget, tags) |
| Theme | next-themes (dark-first) |
| Content | MDX for case studies and blog posts — no headless CMS needed |
| Data | Typed TS/JSON files in `/data` — the entire source of truth, version-controlled |
| Contact form (optional) | A single Vercel serverless API route + Resend, OR a client-only `mailto` fallback |
| Images | `next/image` for automatic optimization |
| Deployment | Vercel, linked to GitHub for CI/CD-by-default |
| Package Manager | pnpm |

---

## 3. AI-Assisted Build Workflow

Two Claude models, distinct responsibilities:

- **Claude Opus — design and planning.** Information architecture decisions,
  visual/design-system direction, data-schema design, reviewing structure before code
  is written, resolving ambiguous product decisions. Opus updates this plan itself if
  scope changes.
- **Claude Sonnet — implementation.** Writes and edits component code, wires up data
  files, styling, animations, bug fixes — working strictly from the plan and schema
  Opus has already defined, not re-deciding architecture mid-implementation.

### `CLAUDE.md` — required, and kept alive throughout the project

Both models must create a `CLAUDE.md` file at the project root during initial setup,
and treat it as the project's living memory — **read at the start of every session and
updated at the end of every session**, not just once.

`CLAUDE.md` must contain:

- Project summary — one paragraph on what this portfolio is and who it's for
- Tech stack — the exact versions and libraries in use
- Folder structure and naming conventions
- Data schema reference — the shape of every file in `/data` (so Sonnet never has to
  guess a field name)
- Design tokens — colors, fonts, spacing scale, and any Tailwind config customizations
- Commit convention in use (see Section 4)
- A running **Decisions Log** — short dated entries for any non-obvious choice
  (e.g. `2026-07-20: chose next/image over a raw <img> for case study covers`)
- A running **Progress / TODO** section reflecting exactly what's built vs. pending,
  updated at the end of every work session

**Instruction for both models:** never let `CLAUDE.md` drift out of date. If a session
changes the data schema, the folder structure, or a design decision, that session is
not complete until `CLAUDE.md` reflects it.

---

## 4. Git & Repository Practices

Tracked on GitHub from day one, pushed in small, incremental, reviewable commits —
never one large "initial commit" dump.

### Branching

- `main` — always deployable; this is what Vercel builds from
- `feature/*` branches for each section or feature (e.g. `feature/hero-section`,
  `feature/case-studies-filter`, `feature/email-widget`), merged via pull request

### Commit convention — Conventional Commits, short and to the point

```
feat: add hero section with role rotator
feat: add floating email widget
feat: add case study filter and search
fix: correct education card CGPA alignment on mobile
style: adjust skill chip spacing
refactor: extract StatCounter into shared component
docs: update CLAUDE.md with data schema
chore: configure ESLint and Prettier
```

Rule of thumb: **one commit = one logical change**. A commit message should read as a
short, present-tense instruction ("add X", "fix Y") — never "updates" or "misc changes".

### Repository structure at the root

```
sara-jabeen-portfolio/
  .github/
    workflows/
      ci.yml              # Lint + type-check + build on every PR
  app/
  components/
  content/
  data/
  public/
  styles/
  types/
  .env.example
  .eslintrc.json
  .gitignore
  .prettierrc
  CLAUDE.md
  README.md
  next.config.ts
  package.json
  pnpm-lock.yaml
  tailwind.config.ts
  tsconfig.json
```

### `.gitignore` (essentials)

```
# dependencies
node_modules/
.pnpm-store/

# next.js
.next/
out/

# env
.env
.env.local
.env*.local

# build & system
.vercel
.DS_Store
*.log
coverage/

# editor
.vscode/*
!.vscode/extensions.json
```

### `README.md` — should cover

- What the project is, live URL, and a screenshot
- Tech stack summary
- Local setup: `clone → pnpm install → pnpm dev`
- How to add a new case study or blog post (since it's just a new `.mdx` file)
- Link to `CLAUDE.md` for anyone (human or AI) picking the project back up

### CI (`.github/workflows/ci.yml`)

- Run on every pull request: type-check (`tsc --noEmit`), lint (`eslint`), and a
  production build (`next build`) — so a broken build can never reach `main`

---

## 5. Floating Direct-Email Widget

A persistent floating action button fixed to the **bottom-right corner** of the
viewport, visible on every page (Home, Case Studies, Blog, and detail pages alike) —
so a recruiter never has to scroll to Contact to reach out.

### Behavior

- Collapsed state: a circular button with an envelope icon (Lucide `Mail`),
  accent-colored, subtle shadow, gentle idle pulse or bounce-in on first scroll
- Expanded state (on click/hover): a small card showing "Email me" with Sara's
  address, a "Copy email" action, and a "Send email" button that opens
  `mailto:sara@example.com`
- Keyboard accessible (focusable, Enter/Space to trigger, Escape to close) and
  respects `prefers-reduced-motion` for the entrance animation
- Stays above all other content (high z-index) but never overlaps the contact form or
  footer links on small screens — collapses to a smaller icon-only version on mobile

### Implementation notes

- Pure client component (`components/widgets/EmailWidget.tsx`), no server call
  needed — it only opens a `mailto:` link or copies text to the clipboard
- Email address pulled from `data/profile.ts`, never hardcoded twice
- Rendered once in the root layout (`app/layout.tsx`) so it appears on every route
  automatically

---

## 6. Content & Data Model

```
data/
  profile.ts        # name, role, tagline, email, location, social links
  education.ts       # institution, degree, duration, focus areas
  experience.ts       # professional + freelance/academic track arrays
  projects.ts          # the 8 case studies below, typed and category-tagged
  skills.ts              # categorized skill arrays
  stats.ts                # home/about stat-counter values
content/
  projects/*.mdx        # longer-form case study write-ups (optional, for the 2-3
                          # featured deep dives)
  blog/*.mdx              # blog posts
```

---

## 7. About — Content (ready to drop into `data/profile.ts` + About section copy)

### Bio

> I build full-stack web and mobile products end-to-end, from database schema to
> pixel-perfect UI, and I care as much about how something feels to use as how it's
> engineered underneath.
>
> Over the past 2+ years, I've shipped 8+ projects spanning web, mobile, ML pipelines,
> and systems programming, including my final-year project QuickAid, an Android
> disaster-response app that runs on Bluetooth mesh networking so NGOs and volunteers
> can coordinate even when cellular networks are down.
>
> I also spent time as a freelance technical writer for US-based clients, so beyond
> writing code, I can explain it clearly to a team, a PM, or a user. That combination
> of engineering, communication, and design sense is what I bring to a product team.

### Status line

- Final-year CS student at FAST-NUCES Islamabad, graduating 2026
- Open to full-stack / software engineering roles (remote or Islamabad-based)

### Links

| Channel | URL |
|---|---|
| Portfolio | sara-jabeen-portfolio.vercel.app |
| GitHub | github.com/sara-jabeennn |
| LinkedIn | linkedin.com/in/sara-jabeen-1b6876243 |

### Education

| Field | Value |
|---|---|
| Institution | FAST-NUCES Islamabad |
| Degree | BS Computer Science |
| Duration | Graduating 2026 (Final-Year Student) |
| Focus | Full-stack development, AI-integrated applications |

### Freelance experience (short line in About, or its own Experience entry)

**Freelance Technical Writer** — US-based clients. Produced clear technical
writing/documentation alongside engineering work, demonstrating communication skill
on top of development ability.

---

## 8. Skills — Content (ready for `data/skills.ts`)

| Category | Technologies |
|---|---|
| Frontend | React, Next.js, TypeScript, responsive & accessible UI |
| Backend | Node.js, Express, NestJS, REST & API design |
| Databases | MongoDB, PostgreSQL, MySQL |
| Mobile | Kotlin, Android, Firebase |
| DevOps / Tooling | Git, Docker, CI/CD (GitHub Actions), AWS |
| AI Integration | LLM/API-based features, MLOps pipelines (T5, FastAPI, Airflow, Prometheus/Grafana) |
| Design | Figma, UX research, wireframing → high-fidelity prototyping |

> Note: includes a **Mobile** category (Kotlin/Android/Firebase) reflecting QuickAid.

---

## 9. Projects — Content (ready for `data/projects.ts`)

Eight projects, mapped to Case Study categories for the filter bar
(`All · Web · Mobile · AI/MLOps · Design/UX · Systems`). Each entry below is one
`data/projects.ts` object.

### 1. QuickAid — Disaster Management App (Final Year Project)
**Aug 2025 – May 2026** · `Mobile / Systems`

A disaster emergency communication Android app built on Bluetooth mesh networking,
designed to work when cellular networks are completely unavailable. Enables
real-time coordination between NGOs, volunteers, and affected communities, supporting
resource tracking and volunteer management in crisis situations. Built as Final Year
Project at FAST-NUCES Islamabad.

**Stack:** Kotlin, Firebase, Bluetooth Mesh Networking, Android

### 2. Shuttle Bot — Autonomous Sports Robotics System
**Feb 2026 – May 2026** · `AI / Robotics`

An autonomous robot concept capable of shuttlecock detection, navigation, collection,
and placement using ML-based vision and robotic control techniques.

**Stack:** Machine Learning, Computer Vision, Robotics Control

### 3. SmartWait — Context-Aware Queue System
**Nov 2025 – Dec 2025** · `Design / UX`

A UX prototype for a smart waiting experience system for restaurant food pickup,
focused on reducing user anxiety through real-time queue visibility, estimated wait
times, and calming UI design. Delivered both low-fidelity wireframes and a clickable
high-fidelity prototype in Figma, applying visual hierarchy, color psychology, and
accessibility principles.

**Stack:** Figma, UX Research, UI Design, Accessibility

### 4. E-Commerce Ad Creative Generator
**Oct 2025 – Nov 2025** · `AI / MLOps`

An MLOps pipeline with a T5 model for ad copy generation, deployed on AWS EKS with
GitHub Actions CI/CD, Prometheus/Grafana monitoring, and Airflow orchestration.

**Stack:** MLOps, T5, FastAPI, AWS EKS, GitHub Actions, Airflow, Prometheus, Grafana

### 5. My Beauty Assistant
**Apr 2025 – Jun 2025** · `Web`

A full-stack web application featuring beauty tutorials, product recommendations,
quizzes, and personalized user experiences.

**Stack:** MERN Stack (MongoDB, Express, React, Node.js)

### 6. Learning Management System (LMS)
**Feb 2025 – Mar 2025** · `Web`

Educational platform with an admin dashboard for structured content management and
filtering.

**Stack:** React.js, Node.js, MongoDB

### 7. Corporate Vendor & Contract Management System
**Nov 2024 – Dec 2024** · `Web`

A role-based procurement management system featuring vendor registration, contract
lifecycle management, purchase order tracking, budget monitoring, database triggers,
stored procedures, and MySQL–Node.js integration.

**Stack:** MySQL, Node.js, Stored Procedures, Triggers

### 8. Advanced Classroom Management System
**Jun 2023 – Aug 2023** · `Systems`

A console-based virtual classroom platform featuring user authentication, class and
assignment management, grading, notifications, file handling, and persistent data
storage using advanced OOP principles.

**Stack:** C++, Object-Oriented Programming (OOP), File Handling

> **Recommendation:** feature QuickAid, the E-Commerce Ad Creative Generator, and
> SmartWait as the 3 "Featured" case studies with full MDX write-ups (mobile/systems
> depth, AI/MLOps depth, and design depth respectively) — the remaining five appear
> as standard case-study cards.

---

## 10. Page-by-Page Structure Summary

### Home
- Hero: headline, role line, 1–2 line bio excerpt, tech badge row, CTA buttons
  (View Projects · Download CV), terminal-style status widget, stat counters
  (8+ projects, 7 skill categories, 2+ years)

### About
- Full bio (Section 7), Education card, freelance-writing line, Areas of Interest
  tags (Full-Stack Development, Mobile Development, AI Integration, MLOps, UX Design,
  Systems Programming)

### Experience
- Freelance Technical Writer entry, plus any internships/teaching roles Sara wants
  listed, in the dual-track card format

### Case Studies
- All 8 projects from Section 9, filterable by category, 3 featured with full
  case-study detail pages

### Skills
- The 7 categories from Section 8, each with a technology count

### Showcase
- Any freelance client work, hackathons, or collaborations not already covered as a
  full case study; certifications/badges sub-section if she has any

### Contact
- Contact form + direct links, complemented everywhere by the floating email widget
  from Section 5

### Blog
- Optional at launch — can start empty and grow post-launch; the LMS / Vendor
  Management / Classroom System projects are good first retrospective topics

---

## 11. Component Library

- `Navbar` (anchored links + active-section highlight)
- `Hero` + role-rotator + terminal status widget
- `StatCounter` (animated on scroll-into-view)
- `EducationCard`
- `AreaOfInterestTag`
- `ExperienceCard` (dual-track)
- `CaseStudyCard` + `FilterBar` + `SearchBox`
- Case study detail template (MDX-rendered)
- `SkillGroup` (category header + counter + chip list)
- `ShowcaseEntry`
- `ContactForm` (RHF + Zod) or mailto fallback
- `EmailWidget` (floating, bottom-right, Section 5)
- `Footer`

---

## 12. Implementation Roadmap

| Phase | Deliverables | Est. Time |
|---|---|---|
| 0. Repo & AI setup | Create GitHub repo, `.gitignore`, README skeleton, `CLAUDE.md` v1 (Opus), CI workflow. | 1 day |
| 1. Foundation | Next.js 15 + TS + Tailwind v4 + shadcn/ui, ESLint/Prettier, Vercel project linked to GitHub. | 1–2 days |
| 2. Data layer | Build `data/` files with all real content from Sections 7–9. | 1–2 days |
| 3. Home + About | Hero, terminal widget, stat counters, About + Education + Areas of Interest. | 1 week |
| 4. Experience + Skills | Dual-track experience cards, categorized skill groups. | 3–4 days |
| 5. Case Studies | Filterable index, 3 featured MDX detail pages, 5 standard cards. | 1.5 weeks |
| 6. Showcase + Contact + Email Widget | Showcase entries, contact form/mailto, floating `EmailWidget` on root layout. | 4–5 days |
| 7. Blog (optional at launch) | Index + MDX template; can ship empty and fill post-launch. | 2–3 days |
| 8. Polish & launch | Animation pass, image optimization, accessibility check, custom domain, final `CLAUDE.md` update, deploy. | 3–4 days |

Each phase should correspond to its own `feature/*` branch and a small run of
Conventional Commits (Section 4), merged to `main` once that phase's slice is working
end-to-end — never one giant commit per phase.

---

## 13. Final Notes

- Everything is frontend-only and Vercel-deployed — no separate backend/database to
  maintain.
- The floating email widget should be the fastest path to contact anywhere on the site.
- `CLAUDE.md` is not a one-time file — both Opus and Sonnet must read it before
  starting work and update it before ending a session.
- Git history should read as a clear, reviewable build log — short, present-tense,
  one-change-per-commit.
- Ship after Phase 6 if needed; Blog can grow after launch without blocking the rest
  of the site going live.
