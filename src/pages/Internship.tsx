import { useTranslation } from "react-i18next";
import { upcomingInterns, pastInterns, testimonials } from "../data/interns";

export default function Internship() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <span className="inline-block px-3 py-1 bg-surface-container-high text-primary font-bold text-[0.65rem] tracking-[0.15em] rounded mb-4 uppercase">
          TAEB
        </span>
        <h1 className="text-[3.5rem] md:text-[4.5rem] font-extrabold leading-[1.05] tracking-tight text-on-surface mb-6">
          {t("internship.headline")}
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl">
          {t("internship.description")}
        </p>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-on-surface mb-12">{t("internship.testimonials")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((item, i) => (
              <div key={i} className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-l-4 border-primary">
                <p className="text-on-surface-variant leading-relaxed italic mb-6">"{item.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant">person</span>
                  </div>
                  <span className="font-bold text-on-surface text-sm">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Interns */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-on-surface mb-4">{t("internship.upcomingInterns")}</h2>
          <p className="text-on-surface-variant mb-12">{upcomingInterns.length} interns selected for 2026</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {upcomingInterns.map((intern, i) => (
              <div key={i} className="group bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl text-on-surface-variant">person</span>
                </div>
                <h3 className="font-bold text-on-surface text-sm text-center mb-1">{intern.name}</h3>
                {intern.university && (
                  <p className="text-xs text-on-surface-variant text-center mb-2">{intern.university}</p>
                )}
                {intern.scholarship && (
                  <p className="text-[10px] text-center font-medium text-primary bg-primary/5 rounded px-2 py-1">
                    {intern.scholarship}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Interns */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-on-surface mb-12">{t("internship.pastInterns")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {pastInterns.map((intern, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl text-on-surface-variant">person</span>
                </div>
                <h3 className="font-bold text-on-surface text-sm">{intern.name}</h3>
                {intern.year && (
                  <p className="text-xs text-on-surface-variant">{intern.year}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
