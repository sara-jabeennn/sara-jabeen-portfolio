import { describe, it, expect } from "vitest";
import { projects } from "./projects";
import type { CaseStudyCategory } from "@/types";

const VALID_CATEGORIES: CaseStudyCategory[] = [
  "Web",
  "Mobile",
  "AI/MLOps",
  "Design/UX",
  "Systems",
];

const PROFILE_URL = "https://github.com/sara-jabeennn";

describe("projects data integrity", () => {
  it("has exactly 9 projects", () => {
    expect(projects).toHaveLength(9);
  });

  it("never falls back to the bare profile URL for a project's github link", () => {
    // Regression guard: this exact fallback previously masked a missing repo
    // link and, combined with an unresolved content gap, silently dropped a
    // real project to keep the count looking right. See CLAUDE.md Decisions
    // Log, 2026-07-16.
    for (const project of projects) {
      if (project.links.github) {
        expect(project.links.github).not.toBe(PROFILE_URL);
        expect(project.links.github.startsWith(`${PROFILE_URL}/`)).toBe(true);
      }
    }
  });

  it("has unique slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("every category is a valid CaseStudyCategory", () => {
    for (const project of projects) {
      expect(project.categories.length).toBeGreaterThan(0);
      for (const category of project.categories) {
        expect(VALID_CATEGORIES).toContain(category);
      }
    }
  });

  it("exactly the 3 confirmed projects are featured", () => {
    const featuredSlugs = projects
      .filter((p) => p.featured)
      .map((p) => p.slug)
      .sort();
    expect(featuredSlugs).toEqual(
      ["ecommerce-ad-creative-generator", "quickaid", "smartwait"].sort()
    );
  });

  it("every featured project has a resolvable case study mdx path", () => {
    for (const project of projects.filter((p) => p.featured)) {
      expect(project.caseStudyMdxPath).toBeTruthy();
      expect(project.caseStudyMdxPath).toMatch(/^content\/projects\/.+\.mdx$/);
    }
  });

  it("non-featured projects have no case study mdx path", () => {
    for (const project of projects.filter((p) => !p.featured)) {
      expect(project.caseStudyMdxPath).toBeUndefined();
    }
  });

  it("every project has a non-empty title, summary, and stack", () => {
    for (const project of projects) {
      expect(project.title.length).toBeGreaterThan(0);
      expect(project.summary.length).toBeGreaterThan(0);
      expect(project.stack.length).toBeGreaterThan(0);
    }
  });
});
