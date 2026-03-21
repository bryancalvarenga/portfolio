'use client';

import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { Project } from '@/data/projects';

type Props = {
  project: Project;
  onOpen: (project: Project) => void;
};

export default function ProjectCard({ project, onOpen }: Props) {
  const t = useTranslations('projects');
  const slug = project.slug;

  const title = t(`${slug}.title` as typeof slug);
  const desc = t(`${slug}.desc` as typeof slug);

  return (
    <article className="project-card group flex flex-col rounded-2xl overflow-hidden">
      {/* Cover */}
      <button
        onClick={() => onOpen(project)}
        className="relative block aspect-video w-full overflow-hidden bg-surface-1 shrink-0"
        aria-label={title}
        tabIndex={0}
      >
        <Image
          src={project.coverSrc}
          alt={t(`${slug}.coverAlt` as typeof slug)}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3 className="font-semibold text-title text-sm leading-snug mb-1">{title}</h3>
          <p className="text-xs text-muted leading-relaxed line-clamp-2">{desc}</p>
        </div>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {project.tech.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-chip text-xs px-2 py-0.5">{tech}</span>
          ))}
          {project.tech.length > 4 && (
            <span className="tech-chip text-xs px-2 py-0.5">+{project.tech.length - 4}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-1">
          <button
            onClick={() => onOpen(project)}
            className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {t('viewProject')}
          </button>
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-muted hover:text-title transition-colors"
            >
              <Github size={12} />
              {t('code')}
            </a>
          )}
          {project.links.demo && project.links.demo !== project.links.repo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-muted hover:text-title transition-colors ml-auto"
            >
              <ExternalLink size={12} />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
