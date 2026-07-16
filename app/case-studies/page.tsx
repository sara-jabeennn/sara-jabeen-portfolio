import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { ProjectsExplorer } from "@/components/sections/ProjectsExplorer";

export const metadata: Metadata = {
  title: `Case Studies — ${profile.name}`,
  description: `${projects.length} projects spanning web, mobile, AI/MLOps, design, and systems programming.`,
};

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="font-heading text-4xl italic">Case Studies</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        {projects.length} projects, filterable by category or searchable by
        stack.
      </p>

      <div className="mt-10">
        <ProjectsExplorer projects={projects} />
      </div>
    </div>
  );
}
