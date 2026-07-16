export interface SocialLink {
  label: string;
  href: string;
  /** "Mail" (Lucide) | "Github" | "LinkedIn" (rendered via Simple Icons /
   * a local glyph in components/icons - neither ships a Lucide brand mark). */
  icon: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  email: string;
  /** tel: value, e.g. "+923119806354". Contact section only - see CLAUDE.md. */
  phone: string;
  /** wa.me link, e.g. "https://wa.me/923119806354". Contact section only. */
  whatsappUrl: string;
  location: string;
  status: string;
  resumeUrl?: string;
  socials: SocialLink[];
  areasOfInterest: string[];
}
