import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { ExperienceSummary } from '@/components/sections/ExperienceSummary';
import { ProjectsSummary } from '@/components/sections/ProjectsSummary';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <ExperienceSummary />
      <ProjectsSummary />
      <Contact />
    </main>
  );
}
