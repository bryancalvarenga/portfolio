import { getTranslations } from "next-intl/server";
import { GraduationCap, Briefcase } from "lucide-react";

export default async function Experience() {
  const t = await getTranslations("experience");

  const courses = t.raw("education.courses") as string[];
  const jobItems = t.raw("jobs.sge.items") as string[];

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="section-title">{t("title")}</h2>
        <div className="w-10 h-0.5 bg-primary mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Education */}
          <div className="fx-card">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={18} className="text-primary" />
              <h3 className="text-base font-semibold text-title">
                {t("education.title")}
              </h3>
            </div>
            <ol className="timeline">
              <li className="timeline-item">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <span className="font-medium text-title text-sm">
                    {t("education.course")}
                  </span>
                  <small className="text-muted text-xs shrink-0">
                    {t("education.period")}
                  </small>
                </div>
                <p className="text-body text-sm leading-relaxed">
                  {t("education.desc")}
                </p>
              </li>
            </ol>

            <div className="mt-6">
              <h4 className="text-xs font-semibold text-title uppercase tracking-widest opacity-50 mb-3">
                {t("education.coursesTitle")}
              </h4>
              <ul className="space-y-1.5">
                {courses.map((course, i) => (
                  <li
                    key={i}
                    className="text-sm text-body flex items-baseline gap-2"
                  >
                    <span className="text-primary shrink-0 leading-none">
                      ›
                    </span>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Jobs */}
          <div className="fx-card">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase size={18} className="text-primary" />
              <h3 className="text-base font-semibold text-title">
                {t("jobs.title")}
              </h3>
            </div>
            <ol className="timeline">
              <li className="timeline-item">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <span className="font-medium text-title text-sm">
                    {t("jobs.sge.title")}
                  </span>
                  <small className="text-muted text-xs shrink-0">
                    {t("jobs.sge.period")}
                  </small>
                </div>
                <p className="text-body text-sm leading-relaxed mb-3">
                  {t("jobs.sge.desc")}
                </p>
                <ul className="space-y-1.5">
                  {jobItems.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-body flex items-baseline gap-2"
                    >
                      <span className="text-primary mt-1 shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
