# Sara Jabeen — Portfolio Website

## Context
Internship assignment: build a modern, responsive, original personal portfolio.
Deadline: 19 July 2026. Deliverables: GitHub repo + live Vercel link.
Reference material lives in `docs/` — READ BOTH BEFORE WRITING CODE:
- `docs/strategy-plan.md` — full branding/design/architecture blueprint
- `docs/old-portfolio.html` — my previous portfolio (visual reference for palette
  and personality ONLY, do not copy its code)

## Who I am (use this, don't invent)
Sara Jabeen — Full-Stack Software Engineer, AI-Integrated Web & Mobile Applications.
CS graduate, FAST-NUCES Islamabad (2022–2026). Currently open to opportunities.
- GitHub: github.com/sara-jabeennn
- LinkedIn: linkedin.com/in/sara-jabeen-1b6876243
- Email: syedajabean@gmail.com

## Featured projects (4 — no more)
1. **QuickAid** — Disaster management Android app. Kotlin, Firebase/Firestore,
   Bluetooth mesh networking with Dijkstra routing, TFLite/MobileFaceNet for
   OFFLINE face recognition. Final year project. Flagship — lead with this.
2. **E-Commerce Ad Creative Generator** — T5, FastAPI, Docker, AWS EKS, MLflow, Airflow.
3. **Fake News Detection** — DVC, MLflow, scikit-learn. Full MLOps pipeline.
4. **My Beauty Assistant** — MERN stack.

## Stack (locked — do not substitute)
Next.js 15 App Router · TypeScript (strict) · Tailwind CSS v4 · Framer Motion
(the ONLY animation library) · Lucide React · next-themes · pnpm · Vercel.
No GSAP, no three.js, no particles.js, no shadcn unless I ask.

## Design direction
Dark-first, warm not corporate. Base tokens from my old site:
bg #0a0a0f · surface #1e1e2e · text #f0ede8 · muted #a8a4b8
accent #e8b4a0 (warm peach) · accent2 #c9a0dc (lilac) · accent3 #7dd3c0 (mint)
Fonts: Playfair Display (display/italic accents) · DM Sans (body) · DM Mono (code/labels).
Feel: editorial, confident typography, generous whitespace, restrained motion.

## Hard rules
- NO custom cursor. Never set `cursor: none`. This is non-negotiable.
- Every animation must respect `prefers-reduced-motion`.
- Semantic HTML: nav/main/section/article. No div soup.
- Mobile-first. Test 375px, 768px, 1440px.
- All data (projects, skills, experience, socials) lives in `data/*.ts` —
  adding a project must never mean editing a component.
- ARIA labels on all icon-only buttons. WCAG AA contrast minimum.
- Real content only. No lorem ipsum, no fake testimonials, no invented metrics.
- Target Lighthouse 95+ on mobile across all four categories.

## Scope guard
NOT in v1: blog/MDX, command palette, RAG chatbot, GitHub API graph, guestbook,
i18n, PWA. Ship the core first. Ask me before adding anything outside this file.
