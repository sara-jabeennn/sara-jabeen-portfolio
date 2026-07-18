import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Sara Jabeen",
  role: "Full-Stack Software Engineer",
  tagline: "Building AI-integrated web and mobile applications.",
  // Restored to the original 3-paragraph structure/voice from
  // docs/old-portfolio.html (real prose she wrote), updated for current
  // facts: final-semester (not graduated), 11 projects (roster count as of
  // 2026-07-18). Freelance writing moved to an About callout card, matching
  // the old site's actual structure, rather than staying a 4th bio paragraph.
  bio: [
    "I'm a final-semester CS student at FAST NUCES Islamabad with a passion for building systems that span the full stack — from Bluetooth mesh networks enabling disaster communication, to production-grade MLOps pipelines running on AWS EKS with Kubernetes.",
    "My work sits at the intersection of intelligent systems and great user experiences. I care about both the model accuracy and the interface that presents it. Whether it's a T5 transformer generating ad copy or a UX prototype reducing queue anxiety, I bring end-to-end ownership.",
    "I've shipped 11 projects across MLOps, full-stack web, mobile applications, and systems programming — always pushing to production-ready standards with Docker, CI/CD, and observability baked in.",
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
