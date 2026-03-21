import { getTranslations } from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="footer-border py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-2 text-center">
        <small className="text-sm text-muted">
          {t('rights', { year })}
        </small>
        <small className="text-sm text-muted">
          {t('copy')}
        </small>
      </div>
    </footer>
  );
}
