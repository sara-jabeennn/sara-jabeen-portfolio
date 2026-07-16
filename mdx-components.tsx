import type { MDXComponents } from "mdx/types";

// Required by @next/mdx. Custom component overrides for case-study and blog
// MDX content land here in Phase 7/11 - left at defaults until then.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
