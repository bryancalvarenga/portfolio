'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const LOCALES = [
  { code: 'pt', label: 'PT', flag: 'fi-br' },
  { code: 'en', label: 'EN', flag: 'fi-gb' },
  { code: 'es', label: 'ES', flag: 'fi-es' },
  { code: 'ja', label: 'JP', flag: 'fi-jp' },
] as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Fechar lang dropdown ao clicar fora
  useEffect(() => {
    if (!langOpen) return;
    const close = () => setLangOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [langOpen]);

  function switchLocale(code: string) {
    router.replace(pathname, { locale: code });
    setLangOpen(false);
    setMobileOpen(false);
  }

  const currentLocale = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  const navLinks = [
    { href: '#about', label: t('about') },
    { href: '#projects', label: t('projects') },
    { href: '#skills', label: t('skills') },
    { href: '#experience', label: t('experience') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 navbar-header',
          (scrolled || mobileOpen) && 'is-scrolled'
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center h-16 gap-4">

          {/* ESQUERDA: seletor de idioma */}
          <div className="shrink-0">
            {/* Desktop */}
            <div className="hidden lg:block">
              <LangDropdown
                current={currentLocale}
                open={langOpen}
                setOpen={(v) => setLangOpen(v)}
                onSelect={switchLocale}
              />
            </div>
            {/* Mobile: apenas flag + código */}
            <div className="lg:hidden">
              <LangDropdown
                current={currentLocale}
                open={langOpen}
                setOpen={(v) => setLangOpen(v)}
                onSelect={switchLocale}
                compact
              />
            </div>
          </div>

          {/* CENTRO: nav links (desktop) */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-body hover:text-title transition-colors rounded-md hover:bg-black/5 dark:hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* DIREITA: theme toggle + CTA (desktop) | theme toggle + hamburger (mobile) */}
          <div className="flex items-center gap-2 ml-auto">
            <ThemeToggle />

            {/* CTA desktop */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center px-4 py-2 text-sm rounded-lg bg-primary hover:bg-primary-600 text-white font-medium transition-colors"
            >
              {t('letsTalk')}
            </a>

            {/* Hamburger mobile */}
            <button
              className="lg:hidden p-2 text-muted hover:text-title transition-colors rounded-md"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? t('close') : t('openMenu')}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="fixed top-16 left-0 right-0 z-30 navbar-bg px-4 py-5 flex flex-col gap-3 lg:hidden"
          >
            <nav className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2.5 text-sm text-body hover:text-title transition-colors rounded-md hover:bg-black/5 dark:hover:bg-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className="mt-1 w-full text-center px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-600 text-white text-sm font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t('letsTalk')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Language Dropdown ───────────────────────────── */
function LangDropdown({
  current,
  open,
  setOpen,
  onSelect,
  compact = false,
}: {
  current: (typeof LOCALES)[number];
  open: boolean;
  setOpen: (v: boolean) => void;
  onSelect: (code: string) => void;
  compact?: boolean;
}) {
  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'flex items-center gap-1.5 rounded-lg text-sm text-muted hover:text-title transition-colors',
          compact ? 'p-1.5' : 'px-2.5 py-1.5 gap-2'
        )}
        aria-label="Selecionar idioma"
        aria-expanded={open}
      >
        <span className={`fi ${current.flag} text-base`} />
        {!compact && <span className="font-medium text-xs tracking-wide">{current.label}</span>}
        <svg
          className={cn('w-2.5 h-2.5 transition-transform text-muted', open && 'rotate-180')}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -4 }}
            transition={{ duration: 0.13 }}
            className="lang-dropdown-menu absolute left-0 top-full mt-1.5 z-50 min-w-[110px] rounded-xl overflow-hidden shadow-soft"
          >
            {LOCALES.map((l) => (
              <button
                key={l.code}
                onClick={() => onSelect(l.code)}
                className={cn(
                  'w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-medium transition-colors',
                  l.code === current.code
                    ? 'text-primary bg-primary/5'
                    : 'text-body hover:text-title hover:bg-black/5 dark:hover:bg-white/5'
                )}
              >
                <span className={`fi ${l.flag} text-sm`} />
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Theme Toggle ────────────────────────────────── */
function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-8 h-8" />;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2 rounded-lg text-muted hover:text-title transition-colors hover:bg-black/5 dark:hover:bg-white/5"
      aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
