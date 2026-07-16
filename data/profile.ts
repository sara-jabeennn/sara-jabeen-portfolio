import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Sara Jabeen",
  role: "Full-Stack Software Engineer",
  tagline: "Building AI-integrated web and mobile applications.",
  bio: [
    "I build full-stack web and mobile products end-to-end, from database schema to pixel-perfect UI, and I care as much about how something feels to use as how it's engineered underneath.",
    "Over the past 2+ years, I've shipped 8+ projects spanning web, mobile, ML pipelines, and systems programming, including QuickAid, an Android disaster-response app that runs on Bluetooth mesh networking so NGOs and volunteers can coordinate even when cellular networks are down — my final year project at FAST-NUCES.",
    "I also spent time as a freelance technical writer for US-based clients, so beyond writing code, I can explain it clearly to a team, a PM, or a user. That combination of engineering, communication, and design sense is what I bring to a product team.",
  ],
  email: "syedajabean@gmail.com",
  // Carried forward from docs/old-portfolio.html, not restated in the
  // 2026-07-16 session - confirm still current. Contact section only, see
  // CLAUDE.md "Phone & WhatsApp": never in EmailWidget, footer, or JSON-LD.
  phone: "+923119806354",
  whatsappUrl: "https://wa.me/923119806354",
  location: "G10, Islamabad, Pakistan",
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
  areasOfInterest: [
    "Full-Stack Development",
    "Mobile Development",
    "AI Integration",
    "MLOps",
    "UX Design",
    "Systems Programming",
  ],
};
