import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";
import { getBlogSlugs } from "@/lib/blog";

export const metadata: Metadata = {
  title: `Blog — ${profile.name}`,
  description: "Technical writing, project retrospectives, and engineering notes.",
};

export default function BlogPage() {
  const slugs = getBlogSlugs();

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-heading text-4xl italic">Blog</h1>

      {slugs.length === 0 ? (
        <p className="mt-6 text-muted-foreground">
          No posts yet — the first write-ups are in progress. Check back soon.
        </p>
      ) : (
        <ul className="mt-8 space-y-4">
          {slugs.map((slug) => (
            <li key={slug}>
              <Link
                href={`/blog/${slug}`}
                className="text-lg transition-colors hover:text-primary"
              >
                {slug}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
