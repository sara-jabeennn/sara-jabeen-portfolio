import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Showcase } from "@/components/sections/Showcase";
import { Contact } from "@/components/sections/Contact";
import { getResumeUrl } from "@/lib/resume";

export default function Home() {
  return (
    <>
      <Hero resumeUrl={getResumeUrl()} />
      <About />
      <Experience />
      <Skills />
      <CaseStudies />
      <Showcase />
      <Contact />
    </>
  );
}
