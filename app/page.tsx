import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Showcase } from "@/components/sections/Showcase";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <FeaturedProjects />
      <Showcase />
    </>
  );
}
