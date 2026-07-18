import type { Project } from "@/types";

// No profile-URL fallback here, ever. If a project has no confirmed repo,
// links.github is simply omitted - ProjectCard must render no GitHub button
// in that case rather than defaulting to the profile URL. See CLAUDE.md
// "GitHub links" hard rule. Repo URLs confirmed live 2026-07-18 (all 8
// fetched, zero 404s).
export const projects: Project[] = [
  {
    slug: "quickaid",
    title: "QuickAid — Disaster Management App",
    // Tightened 2026-07-18 (reviewer feedback - let the mesh/routing diagram
    // carry the module-level detail instead of spelling it out in prose).
    summary:
      "Android disaster-response app built on Bluetooth mesh networking, so NGOs and volunteers can coordinate when cellular networks are down. Includes on-device offline face recognition (TFLite + MobileFaceNet), no network dependency.",
    categories: ["Mobile", "Systems"],
    visualTier: "hero",
    dateStart: "2025-08",
    dateEnd: "2026-05",
    stack: ["Kotlin", "Firebase", "Bluetooth Mesh Networking", "Android"],
    links: { github: "https://github.com/sara-jabeennn/QuickAid-FYP" },
  },
  {
    slug: "ecommerce-ad-creative-generator",
    title: "E-Commerce Ad Creative Generator",
    summary:
      "MLOps pipeline using a T5 model for ad copy generation, deployed on AWS EKS with full CI/CD and observability.",
    categories: ["AI/MLOps"],
    visualTier: "prominent",
    dateStart: "2025-10",
    dateEnd: "2025-11",
    stack: [
      "MLOps",
      "T5",
      "FastAPI",
      "AWS EKS",
      "GitHub Actions",
      "Airflow",
      "Prometheus",
      "Grafana",
    ],
    links: {
      github: "https://github.com/sara-jabeennn/ecommerce-ad-generator",
    },
  },
  {
    slug: "fake-news-detection",
    title: "Fake News Detection",
    summary:
      "MLOps pipeline for fake news detection, with DVC data versioning and MLflow experiment tracking.",
    categories: ["AI/MLOps"],
    visualTier: "prominent",
    dateStart: "2025-09",
    dateEnd: "2025-10",
    stack: ["DVC", "MLflow", "scikit-learn"],
    links: { github: "https://github.com/sara-jabeennn/fake-news-detection" },
  },
  {
    slug: "learning-management-system",
    title: "Learning Management System (LMS)",
    summary:
      "Educational platform with an admin dashboard for content management and filtering.",
    categories: ["Web"],
    visualTier: "prominent",
    dateStart: "2025-02",
    dateEnd: "2025-03",
    stack: ["React.js", "Node.js", "MongoDB"],
    links: { github: "https://github.com/sara-jabeennn/Homeschooling-web" },
  },
  {
    slug: "corporate-vendor-contract-management",
    title: "Corporate Vendor & Contract Management System",
    summary:
      "Role-based procurement system covering vendor registration, contract lifecycle, and budget tracking, backed by MySQL triggers and stored procedures.",
    categories: ["Web", "Systems"],
    visualTier: "prominent",
    dateStart: "2024-11",
    dateEnd: "2024-12",
    stack: ["MySQL", "Node.js", "Stored Procedures", "Triggers"],
    links: {
      github: "https://github.com/sara-jabeennn/vendor-contract-management-system",
    },
  },
  {
    slug: "my-beauty-assistant",
    title: "My Beauty Assistant",
    summary:
      "Full-stack web app with beauty tutorials, product recommendations, quizzes, and personalized experiences.",
    categories: ["Web"],
    visualTier: "prominent",
    dateStart: "2025-04",
    dateEnd: "2025-06",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    links: { github: "https://github.com/sara-jabeennn/my-beauty-assistant" },
  },
  {
    slug: "smartwait",
    title: "SmartWait — Context-Aware Queue System",
    summary:
      "UX prototype for a restaurant queue system that cuts wait-time anxiety with real-time visibility and estimated wait times, delivered from wireframes to a clickable Figma prototype.",
    categories: ["Design/UX"],
    visualTier: "compact",
    dateStart: "2025-11",
    dateEnd: "2025-12",
    stack: ["Figma", "UX Research", "UI Design", "Accessibility"],
    links: {}, // no repo - a UX/Figma prototype, nothing to link
  },
  {
    slug: "shuttle-bot",
    title: "Shuttle Bot — Autonomous Sports Robotics System",
    // TODO(content-gap-8a): summary is explicitly not approved for use yet -
    // needs Sara's sign-off before this ships. Do not replace this string
    // with invented copy. See CLAUDE.md Content Gaps #8a. Her CV calls this
    // a concept - whatever description eventually lands here MUST say
    // concept/prototype and must never imply it shipped.
    summary:
      "TODO(content-gap-8a): description pending Sara's sign-off — see CLAUDE.md Content Gaps. Must describe this as a concept/prototype, never as shipped.",
    categories: ["AI/MLOps"],
    visualTier: "compact",
    dateStart: "2026-02",
    dateEnd: "2026-05",
    stack: ["Machine Learning", "Computer Vision", "Robotics Control"],
    links: {}, // no repo
  },
  {
    slug: "advanced-classroom-management-system",
    title: "Advanced Classroom Management System",
    summary:
      "Console-based virtual classroom platform with authentication, grading, and file-backed persistence, built using advanced OOP principles in C++.",
    categories: ["Systems"],
    visualTier: "compact",
    dateStart: "2023-06",
    dateEnd: "2023-08",
    stack: ["C++", "Object-Oriented Programming", "File Handling"],
    links: {
      github: "https://github.com/sara-jabeennn/classroom-management-system",
    },
  },
  {
    slug: "stock-prediction-system",
    title: "Stock Prediction System",
    summary:
      "CI/CD pipeline for a stock prediction system, with Jenkins multi-branch deployment and Docker-based builds.",
    categories: ["Web", "Systems"],
    visualTier: "compact",
    // Dates genuinely unknown - dateStart/dateEnd are optional on the type,
    // no other compact-tier card shows dates either so this isn't a gap.
    stack: ["Jenkins", "Docker", "CI/CD", "Webhooks", "Multi-Branch Deployment"],
    links: {}, // no repo, per Sara 2026-07-18
  },
  {
    slug: "servisync",
    title: "Servisync — Service Management System",
    summary:
      "Service management system with role-based access control, built in JavaFX using OOP design patterns and a relational database.",
    categories: ["Systems"],
    visualTier: "compact",
    // Dates genuinely unknown - see the Stock Prediction System entry above.
    stack: ["JavaFX", "OOP", "Database Systems", "Design Patterns", "Role-Based Access"],
    links: { github: "https://github.com/sara-jabeennn/SDA-project" },
  },
];
