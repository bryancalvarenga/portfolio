import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { projects } from '@/data/projects';
import ProjectsClient from './ProjectsClient';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('projectsTitle'),
    description: t('projectsDescription'),
  };
}

export default async function ProjectsPage() {
  const t = await getTranslations('projects');

  return (
    <main className="min-h-screen pt-28 pb-20" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <Link
            href="/"
            className="text-sm text-muted hover:text-title transition-colors inline-block mb-6"
          >
            {t('backToHome')}
          </Link>
          <h1 className="section-title">{t('allTitle')}</h1>
          <div className="w-10 h-0.5 bg-primary mt-1" />
        </div>

        <ProjectsClient projects={projects} />
      </div>
    </main>
  );
}
