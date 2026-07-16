import type { Project } from "@/types";

// No profile-URL fallback here, ever. If a project has no confirmed repo,
// links.github is simply omitted - ProjectCard must render no GitHub button
// in that case rather than defaulting to the profile URL. See CLAUDE.md
// "GitHub links" hard rule and the 2026-07-16 Decisions Log entry explaining
// why this replaced the earlier GITHUB_PROFILE fallback constant.
export const projects: Project[] = [
  {
    slug: "quickaid",
    title: "QuickAid — Disaster Management App",
    summary:
      "Android disaster-response app built on Bluetooth mesh networking, so NGOs and volunteers can coordinate even when cellular networks are down. Built the Communication Module (Bluetooth mesh, Dijkstra routing, gateway detection, relay privacy) and on-device offline face recognition (TFLite + MobileFaceNet, no network dependency). Final year project at FAST-NUCES.",
    categories: ["Mobile", "Systems"],
    featured: true,
    dateStart: "2025-08",
    dateEnd: "2026-05",
    stack: ["Kotlin", "Firebase", "Bluetooth Mesh Networking", "Android"],
    links: { github: "https://github.com/sara-jabeennn/QuickAid-FYP" },
    caseStudyMdxPath: "content/projects/quickaid.mdx",
  },
  {
    slug: "ecommerce-ad-creative-generator",
    title: "E-Commerce Ad Creative Generator",
    summary:
      "MLOps pipeline with a T5 model for ad copy generation, deployed on AWS EKS with GitHub Actions CI/CD, Prometheus/Grafana monitoring, and Airflow orchestration.",
    categories: ["AI/MLOps"],
    featured: true,
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
    caseStudyMdxPath: "content/projects/ad-creative-generator.mdx",
  },
  {
    slug: "fake-news-detection",
    title: "Fake News Detection",
    summary:
      "Full MLOps pipeline for fake news detection, with DVC for data versioning, MLflow for experiment tracking, and scikit-learn models.",
    categories: ["AI/MLOps"],
    featured: false,
    dateStart: "2025-09",
    dateEnd: "2025-10",
    stack: ["DVC", "MLflow", "scikit-learn"],
    links: { github: "https://github.com/sara-jabeennn/fake-news-detection" },
  },
  {
    slug: "smartwait",
    title: "SmartWait — Context-Aware Queue System",
    summary:
      "UX prototype for a smart waiting experience system for restaurant food pickup, focused on reducing user anxiety through real-time queue visibility, estimated wait times, and calming UI design. Delivered low-fidelity wireframes and a clickable high-fidelity Figma prototype.",
    categories: ["Design/UX"],
    featured: true,
    dateStart: "2025-11",
    dateEnd: "2025-12",
    stack: ["Figma", "UX Research", "UI Design", "Accessibility"],
    links: {}, // no repo - a UX/Figma prototype, nothing to link
    caseStudyMdxPath: "content/projects/smartwait.mdx",
  },
  {
    slug: "my-beauty-assistant",
    title: "My Beauty Assistant",
    summary:
      "Full-stack web application featuring beauty tutorials, product recommendations, quizzes, and personalized user experiences.",
    categories: ["Web"],
    featured: false,
    dateStart: "2025-04",
    dateEnd: "2025-06",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    links: { github: "https://github.com/sara-jabeennn/my-beauty-assistant" },
  },
  {
    slug: "learning-management-system",
    title: "Learning Management System (LMS)",
    summary:
      "Educational platform with an admin dashboard for structured content management and filtering.",
    categories: ["Web"],
    featured: false,
    dateStart: "2025-02",
    dateEnd: "2025-03",
    stack: ["React.js", "Node.js", "MongoDB"],
    links: { github: "https://github.com/sara-jabeennn/Homeschooling-web" },
  },
  {
    slug: "corporate-vendor-contract-management",
    title: "Corporate Vendor & Contract Management System",
    summary:
      "Role-based procurement management system featuring vendor registration, contract lifecycle management, purchase order tracking, budget monitoring, database triggers, stored procedures, and MySQL-Node.js integration.",
    categories: ["Web", "Systems"],
    featured: false,
    dateStart: "2024-11",
    dateEnd: "2024-12",
    stack: ["MySQL", "Node.js", "Stored Procedures", "Triggers"],
    links: {
      github: "https://github.com/sara-jabeennn/vendor-contract-management-system",
    },
  },
  {
    slug: "advanced-classroom-management-system",
    title: "Advanced Classroom Management System",
    summary:
      "Console-based virtual classroom platform featuring user authentication, class and assignment management, grading, notifications, file handling, and persistent data storage using advanced OOP principles.",
    categories: ["Systems"],
    featured: false,
    dateStart: "2023-06",
    dateEnd: "2023-08",
    stack: ["C++", "Object-Oriented Programming", "File Handling"],
    links: {
      github: "https://github.com/sara-jabeennn/classroom-management-system",
    },
  },
  {
    slug: "shuttle-bot",
    title: "Shuttle Bot — Autonomous Sports Robotics System",
    // TODO(content-gap-8a): summary is explicitly not approved for use yet -
    // needs Sara's sign-off before this ships. Do not replace this string
    // with invented copy. See CLAUDE.md Content Gaps #8a.
    summary:
      "TODO(content-gap-8a): description pending Sara's sign-off — see CLAUDE.md Content Gaps.",
    categories: ["AI/MLOps"],
    featured: false,
    dateStart: "2026-02",
    dateEnd: "2026-05",
    stack: ["Machine Learning", "Computer Vision", "Robotics Control"],
    links: {}, // no repo
  },
];
