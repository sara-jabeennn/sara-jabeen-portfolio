import { notFound } from "next/navigation";
import { getBlogSlugs } from "@/lib/blog";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!getBlogSlugs().includes(slug)) {
    notFound();
  }

  const { default: Post } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <article className="mx-auto max-w-3xl px-6 py-24 leading-relaxed">
      <Post />
    </article>
  );
}
