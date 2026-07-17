import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">
        404
      </p>
      <h1 className="mt-3 font-heading text-4xl italic leading-tight sm:text-5xl">
        Nothing at this address.
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you&rsquo;re looking for doesn&rsquo;t exist. Everything on
        this site lives on the homepage.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-primary hover:text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to home
      </Link>
    </div>
  );
}
