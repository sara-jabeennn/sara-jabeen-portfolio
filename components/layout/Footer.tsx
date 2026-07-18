import { Mail, ArrowUp } from "lucide-react";
import { siGithub } from "simple-icons";
import { profile } from "@/data/profile";
import { SimpleIconGlyph } from "@/components/icons/SimpleIconGlyph";
import { LinkedInGlyph } from "@/components/icons/LinkedInGlyph";

function renderSocialIcon(icon: string) {
  switch (icon) {
    case "Github":
      return <SimpleIconGlyph icon={siGithub} className="size-4" />;
    case "LinkedIn":
      return <LinkedInGlyph className="size-4" />;
    case "Mail":
      return <Mail className="size-4" aria-hidden="true" />;
    default:
      return null;
  }
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {year} {profile.name}
        </p>

        <ul className="flex items-center gap-3">
          {profile.socials.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={social.label}
                className="pill-hover inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground"
              >
                {renderSocialIcon(social.icon)}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#top"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowUp className="size-4" aria-hidden="true" />
          Back to top
        </a>
      </div>
    </footer>
  );
}
