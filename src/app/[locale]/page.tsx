import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ project?: string }>;
}) {
  const { project: initialProject } = await searchParams;
  const t = await getTranslations('a11y');

  return (
    <>
      <a className="skip-link" href="#main">
        {t('skipToContent')}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects initialProject={initialProject} />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
