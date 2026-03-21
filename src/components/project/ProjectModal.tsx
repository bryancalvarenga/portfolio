'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Image from 'next/image';
import { X, ExternalLink, Github } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { Project } from '@/data/projects';

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const t = useTranslations('projects');

  if (!project) return null;

  const slug = project.slug;
  const base = slug as Parameters<typeof t>[0];

  // Typed accessors using template literal casting
  const title = t(`${base}.modal.title` as typeof base);
  const coverAlt = t(`${base}.modal.coverAlt` as typeof base);
  const coverCaption = t(`${base}.modal.coverCaption` as typeof base);
  const contextLabel = t(`${base}.modal.context` as typeof base);
  const challengesLabel = t(`${base}.modal.challenges` as typeof base);
  const learningsLabel = t(`${base}.modal.learnings` as typeof base);
  const technologiesLabel = t(`${base}.modal.technologies` as typeof base);
  const demoBtn = t(`${base}.modal.demoBtn` as typeof base);
  const repoBtn = t(`${base}.modal.repoBtn` as typeof base);
  const contextContent = t(`${base}.modal.contextContent` as typeof base);

  const challengesList = t.raw(`${base}.modal.challengesList`) as string[];
  const learningsList = t.raw(`${base}.modal.learningsList`) as string[];

  return (
    <Dialog.Root open={!!project} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl outline-none"
          style={{
            background: 'var(--color-surface-1)',
            border: '1px solid var(--color-border)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
          }}
        >
          <VisuallyHidden>
            <Dialog.Title>{title}</Dialog.Title>
          </VisuallyHidden>

          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b" style={{ background: 'var(--color-surface-1)', borderColor: 'var(--color-border-subtle)' }}>
            <h2 className="text-base font-semibold text-title pr-4 leading-snug">
              {title}
            </h2>
            <Dialog.Close asChild>
              <button
                className="shrink-0 p-1.5 rounded-lg text-muted hover:text-title hover:bg-black/5 transition-colors"
                aria-label="Fechar"
              >
                <X size={18} />
              </button>
            </Dialog.Close>
          </div>

          {/* Cover image */}
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={project.coverSrc}
              alt={coverAlt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          {coverCaption && (
            <p className="px-6 pt-2 pb-0 text-xs text-muted italic">{coverCaption}</p>
          )}

          {/* Body */}
          <div className="p-6 flex flex-col gap-7">
            {/* Context */}
            <Section title={contextLabel}>
              <p className="text-body text-sm leading-relaxed">{contextContent}</p>
            </Section>

            {/* Challenges */}
            <Section title={challengesLabel}>
              <ul className="space-y-2">
                {challengesList.map((item, i) => (
                  <li key={i} className="text-sm text-body flex items-baseline gap-2">
                    <span className="text-primary shrink-0 leading-none">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Learnings */}
            <Section title={learningsLabel}>
              <ul className="space-y-2">
                {learningsList.map((item, i) => (
                  <li key={i} className="text-sm text-body flex items-baseline gap-2">
                    <span className="text-primary shrink-0 leading-none">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Technologies */}
            <Section title={technologiesLabel}>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium"
                    style={{
                      background: 'var(--color-primary-bg)',
                      border: '1px solid rgba(130,87,230,0.25)',
                      color: 'var(--color-chip-text)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Section>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-1">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-600 text-white text-sm font-medium transition-colors"
                >
                  <ExternalLink size={14} />
                  {demoBtn}
                </a>
              )}
              {project.links.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
                >
                  <Github size={14} />
                  {repoBtn}
                </a>
              )}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-title uppercase tracking-widest opacity-50 mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}
