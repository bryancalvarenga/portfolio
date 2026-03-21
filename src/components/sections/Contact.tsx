'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Send, Mail, Github, Linkedin, Terminal, X, CheckCircle2, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

const FORMSPREE_URL = 'https://formspree.io/f/manppgoy';

type Toast = {
  type: 'success' | 'error';
  title: string;
  message: string;
} | null;

export default function Contact() {
  const t = useTranslations('contact');

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<Toast>(null);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get('name') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const message = (data.get('message') as string)?.trim();

    const newErrors: Record<string, boolean> = {
      name: !name,
      email: !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      message: !message,
    };

    if (Object.values(newErrors).some(Boolean)) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (res.ok) {
        form.reset();
        showToast({
          type: 'success',
          title: t('successTitle'),
          message: t('successMessage'),
        });
      } else {
        let msg = t('errorMessage');
        try {
          const json = await res.json();
          if (json.errors?.length) msg = json.errors.map((e: { message: string }) => e.message).join(' ');
        } catch (_) { /* ignore */ }
        showToast({ type: 'error', title: t('errorTitle'), message: msg });
      }
    } catch {
      showToast({
        type: 'error',
        title: t('errorTitle'),
        message: t('errorConnection'),
      });
    } finally {
      setLoading(false);
    }
  }

  function showToast(t: NonNullable<Toast>) {
    setToast(t);
    setTimeout(() => setToast(null), 5000);
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="section-title">{t('title')}</h2>
        <div className="w-10 h-0.5 bg-primary mb-3" />
        <p className="text-muted text-sm mb-10">{t('sub')}</p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:col-span-3 flex flex-col gap-4"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-title mb-1.5">
                  {t('nameLabel')}
                </label>
                <input
                  name="name"
                  type="text"
                  className={cn('form-input', errors.name && 'error')}
                  onChange={() => setErrors((e) => ({ ...e, name: false }))}
                />
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1">{t('nameInvalid')}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-title mb-1.5">
                  {t('emailLabel')}
                </label>
                <input
                  name="email"
                  type="email"
                  className={cn('form-input', errors.email && 'error')}
                  onChange={() => setErrors((e) => ({ ...e, email: false }))}
                />
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1">{t('emailInvalid')}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-title mb-1.5">
                {t('messageLabel')}
              </label>
              <textarea
                name="message"
                rows={5}
                className={cn('form-input resize-none', errors.message && 'error')}
                onChange={() => setErrors((e) => ({ ...e, message: false }))}
              />
              {errors.message && (
                <p className="text-xs text-red-400 mt-1">{t('messageInvalid')}</p>
              )}
            </div>

            {/* Honeypot */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium text-sm transition-colors"
              >
                {loading ? (
                  <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send size={15} />
                )}
                {loading ? t('sending') : t('send')}
              </button>
              <small className="text-muted text-xs">{t('sla')}</small>
            </div>
          </form>

          {/* Channels sidebar */}
          <div className="lg:col-span-2">
            <div
              className="rounded-2xl p-6 h-full"
              style={{
                background: 'var(--color-surface-1)',
                border: '1px solid var(--color-border)',
              }}
            >
              <h3 className="text-sm font-semibold text-title mb-5">
                {t('channelsTitle')}
              </h3>
              <ul className="space-y-4">
                <ChannelLink
                  icon={<Mail size={16} />}
                  href="mailto:bryan@bryanalvarenga.com.br"
                  label="bryan@bryanalvarenga.com.br"
                />
                <ChannelLink
                  icon={<Github size={16} />}
                  href="https://github.com/bryancalvarenga"
                  label="github.com/bryancalvarenga"
                  external
                />
                <ChannelLink
                  icon={<Linkedin size={16} />}
                  href="https://linkedin.com/in/bryanalvarenga"
                  label="linkedin.com/in/bryanalvarenga"
                  external
                />
                <ChannelLink
                  icon={<Terminal size={16} />}
                  href="https://commitlog.com.br"
                  label="commitlog.com.br"
                  external
                />
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-in fade-in slide-in-from-bottom-3">
          <div
            className="flex items-start gap-3 p-4 rounded-xl shadow-soft"
            style={{
              background: 'var(--color-surface-2)',
              border: `1px solid ${toast.type === 'success' ? 'rgba(130,87,230,0.35)' : 'rgba(239,68,68,0.35)'}`,
            }}
          >
            <div
              className={cn(
                'shrink-0 mt-0.5',
                toast.type === 'success' ? 'text-primary' : 'text-red-400'
              )}
            >
              {toast.type === 'success' ? (
                <CheckCircle2 size={18} />
              ) : (
                <AlertTriangle size={18} />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-title">{toast.title}</p>
              <p className="text-xs text-muted mt-0.5">{toast.message}</p>
            </div>
            <button
              onClick={() => setToast(null)}
              className="shrink-0 text-muted hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function ChannelLink({
  icon,
  href,
  label,
  external,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="flex items-center gap-3 text-body hover:text-title text-sm transition-colors group"
      >
        <span className="text-primary group-hover:scale-110 transition-transform">
          {icon}
        </span>
        {label}
      </a>
    </li>
  );
}
