import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EmailWidget } from "@/components/widgets/EmailWidget";
import { CommandPalette } from "@/components/widgets/CommandPalette";
import { ParticleField } from "@/components/widgets/ParticleField";
import { ScrollProgress } from "@/components/widgets/ScrollProgress";
import { Toaster } from "@/components/ui/sonner";
import { profile } from "@/data/profile";
import { SITE_URL } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
};

// Person schema only - deliberately omits `telephone` even though
// Profile.phone exists. Structured data is scraper-facing; the phone number
// stays human-facing only, in the Contact section. See CLAUDE.md "Phone &
// WhatsApp".
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: profile.tagline,
  url: SITE_URL,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
  },
  sameAs: profile.socials
    .filter((social) => social.label !== "Email")
    .map((social) => social.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <TooltipProvider>
            <ScrollProgress />
            <ParticleField />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <EmailWidget />
            <CommandPalette />
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
