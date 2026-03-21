import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Rocket, Mail } from "lucide-react";

export default async function Hero() {
  const t = await getTranslations("hero");

  // Parse gradient tags in title
  const rawTitle = t.rich("title", {
    gradient: (chunks) => (
      <span key="gradient">{chunks}</span>
    ),
  });

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-20">
        <div className="hero-card p-6 md:p-10 lg:p-14">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/15 text-primary border" style={{ borderColor: 'rgba(130, 87, 230, 0.3)' }}>
                {t("badge")}
              </span>

              <h1 className="text-3xl md:text-4xl font-semibold font-title leading-tight mb-4">
                {rawTitle}
              </h1>

              <p className="text-body text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                {t("text")}
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-600 text-white font-medium text-sm transition-colors"
                >
                  <Rocket size={16} />
                  {t("viewProjects")}
                </a>
                <a
                  href="#contact"
                  className="btn-outline inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm"
                >
                  <Mail size={16} />
                  {t("contactMe")}
                </a>
              </div>
            </div>

            {/* Avatar */}
            <div className="flex flex-col items-center gap-7 shrink-0">
              <Image
                src="/images/profile-img.jpg"
                alt={t("avatarAlt")}
                width={176}
                height={176}
                className="profile-avatar"
                priority
              />
              <div className="flex flex-wrap justify-center gap-2">
                {(
                  [
                    { icon: "php", label: "PHP" },
                    { icon: "mysql", label: "MySQL" },
                    { icon: "java", label: "Java" },
                    { icon: "python", label: "Python" },
                  ] as const
                ).map(({ icon, label }) => (
                  <span key={icon} className="tech-chip text-xs">
                    <i className={`devicon-${icon}-plain text-base`} />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
