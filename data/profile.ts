import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Sara Jabeen",
  role: "Full-Stack Software Engineer",
  tagline: "Building AI-integrated web and mobile applications.",
  // Tightened to 2 paragraphs 2026-07-18 (internship reviewer feedback - site
  // felt cluttered, wants concise/impactful over comprehensive). Was a
  // 3-paragraph structure restored 2026-07-17 from docs/old-portfolio.html;
  // same facts (final-semester, 11 projects, AWS EKS/Kubernetes, T5 ad copy,
  // UX prototype, Docker/CI-CD/observability), condensed wording, nothing
  // fabricated or removed as a fact. Freelance writing lives in an About
  // callout card, not a bio paragraph.
  bio: [
    "I'm a final-semester CS student at FAST NUCES Islamabad, building systems that span the full stack — from Bluetooth mesh networks for disaster communication to production-grade MLOps pipelines on AWS EKS. I care as much about model accuracy as the interface that presents it, whether that's a T5 transformer generating ad copy or a UX prototype cutting queue anxiety.",
    "I've shipped 11 projects across MLOps, full-stack web, mobile, and systems programming — always built to production-ready standards, with Docker, CI/CD, and observability baked in.",
  ],
  email: "syedajabean@gmail.com",
  // Carried forward from docs/old-portfolio.html, not restated in the
  // 2026-07-16 session - confirm still current. Contact section only, see
  // CLAUDE.md "Phone & WhatsApp": never in EmailWidget, footer, or JSON-LD.
  phone: "+923119806354",
  whatsappUrl: "https://wa.me/923119806354",
  location: "Islamabad, Pakistan",
  // Never "graduated" - she is not. Corrected 2026-07-16 after an earlier
  // session got this wrong. See CLAUDE.md Decisions Log.
  status: "Final semester · Open to opportunities",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/sara-jabeennn",
      icon: "Github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sara-jabeen-1b6876243",
      icon: "LinkedIn",
    },
    {
      label: "Email",
      href: "mailto:syedajabean@gmail.com",
      icon: "Mail",
    },
  ],
  // Full-stack-first order (2026-07-18, reviewer feedback): she's targeting
  // full-stack software engineering roles, so Full-Stack/Mobile/UX lead and
  // AI/MLOps/Systems follow as differentiators rather than the headline -
  // same 6 tags, nothing removed, just reordered.
  areasOfInterest: [
    "Full-Stack Development",
    "Mobile Development",
    "UX Design",
    "Systems Programming",
    "AI Integration",
    "MLOps",
  ],
};
