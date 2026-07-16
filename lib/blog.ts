import fs from "node:fs";
import path from "node:path";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getBlogSlugs(): string[] {
  try {
    return fs
      .readdirSync(BLOG_DIR)
      .filter((file) => file.endsWith(".mdx") && !file.startsWith("_"))
      .map((file) => file.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}
