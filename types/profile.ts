export interface SocialLink {
  label: string;
  href: string;
  lucideIcon: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  email: string;
  location: string;
  status: string;
  resumeUrl?: string;
  socials: SocialLink[];
  areasOfInterest: string[];
}
