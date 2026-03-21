'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { projects, type Project } from '@/data/projects';
import ProjectCard from '@/components/project/ProjectCard';
import ProjectModal from '@/components/project/ProjectModal';

const HOME_LIMIT = 3;

type Props = {
  initialProject?: string;
};

export default function Projects({ initialProject }: Props) {
  const t = useTranslations('projects');
  const router = useRouter();
  const pathname = usePathname();

  const [selected, setSelected] = useState<Project | null>(() =>
    initialProject ? (projects.find((p) => p.slug === initialProject) ?? null) : null
  );

  function openProject(project: Project) {
    setSelected(project);
    router.push(`${pathname}?project=${project.slug}`);
  }

  function closeProject() {
    setSelected(null);
    router.push(pathname);
  }

  useEffect(() => {
    const onPop = () => {
      const slug = new URLSearchParams(window.location.search).get('project');
      setSelected(slug ? (projects.find((p) => p.slug === slug) ?? null) : null);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const visible = projects.slice(0, HOME_LIMIT);
  const hasMore = projects.length > HOME_LIMIT;

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="section-title">{t('title')}</h2>
        <div className="w-10 h-0.5 bg-primary mb-3" />
        <p className="text-sm mb-10" style={{ color: 'var(--color-muted)' }}>{t('sub')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onOpen={openProject}
            />
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-title transition-colors group"
            >
              {t('viewAll')}
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        )}
      </div>

      <ProjectModal project={selected} onClose={closeProject} />
    </section>
  );
}
