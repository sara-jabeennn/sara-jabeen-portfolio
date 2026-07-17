import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Experience } from "@/components/sections/Experience";
import { Showcase } from "@/components/sections/Showcase";
import { Contact } from "@/components/sections/Contact";
import { getResumeUrl } from "@/lib/resume";

export default function Home() {
  return (
    <>
      <Hero resumeUrl={getResumeUrl()} />
      <Stats />
      <About />
      <Skills />
      <CaseStudies />
      <Experience />
      <Showcase />
      <Contact />
    </>
  );
}
