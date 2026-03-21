import { getTranslations } from "next-intl/server";

export default async function About() {
  const t = await getTranslations("about");

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="section-title">{t("title")}</h2>
        <div className="w-10 h-0.5 bg-primary mb-8" />
        <p className="text-body text-base leading-relaxed mx-auto">
          {t("sub")}
        </p>
      </div>
    </section>
  );
}
