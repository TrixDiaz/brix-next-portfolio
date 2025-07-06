import { FeatureSection } from "@/components/sections/feature";
import { HeaderSection } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero";
import { ProjectSection } from "@/components/sections/project";



export default function Home() {
  return (
    <section>
      <HeaderSection />
      <HeroSection />
      <FeatureSection />
      <ProjectSection />
    </section>
  );
}
