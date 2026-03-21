'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from '@/i18n/navigation';
import { projects as allProjects, type Project } from '@/data/projects';
import ProjectCard from '@/components/project/ProjectCard';
import ProjectModal from '@/components/project/ProjectModal';

type Props = {
  projects: Project[];
};

export default function ProjectsClient({ projects }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const [selected, setSelected] = useState<Project | null>(null);

  function openProject(project: Project) {
    setSelected(project);
    router.push(`${pathname}?project=${project.slug}`);
  }

  function closeProject() {
    setSelected(null);
    router.push(pathname);
  }

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get('project');
    if (slug) {
      const found = allProjects.find((p) => p.slug === slug) ?? null;
      setSelected(found);
    }

    const onPop = () => {
      const s = new URLSearchParams(window.location.search).get('project');
      setSelected(s ? (allProjects.find((p) => p.slug === s) ?? null) : null);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} onOpen={openProject} />
        ))}
      </div>
      <ProjectModal project={selected} onClose={closeProject} />
    </>
  );
}
