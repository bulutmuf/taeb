import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-surface-container-high text-primary font-bold text-[0.65rem] tracking-[0.15em] rounded mb-4 uppercase">
              {t("projects.badge")}
            </span>
            <h1 className="text-[3.5rem] md:text-[4.5rem] font-extrabold leading-[1.05] tracking-tight text-on-surface mb-6">
              {t("projects.headline")}
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl">
              {t("projects.description")}
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex gap-2">
              <div className="w-12 h-1 bg-primary" />
              <div className="w-12 h-1 bg-outline-variant/30" />
              <div className="w-12 h-1 bg-outline-variant/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Flying Pharmacists - large */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                alt={t("projects.flyingPharmacists")}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={projects[0].image}
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-tertiary text-white text-[10px] font-bold tracking-widest uppercase rounded mb-3">
                    {t("projects.flyingPharmacistsTag")}
                  </span>
                  <h3 className="text-2xl font-bold text-on-surface">{t("projects.flyingPharmacists")}</h3>
                </div>
                <span className="material-symbols-outlined text-primary text-3xl">flight_takeoff</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 max-w-2xl">
                {t("projects.flyingPharmacistsDesc")}
              </p>
              <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                {t("projects.projectDetails")} <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Ecology 101 */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="aspect-square overflow-hidden">
              <img
                alt={t("projects.ecology101")}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={projects[1].image}
              />
            </div>
            <div className="p-8">
              <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-widest uppercase rounded mb-3">
                {t("projects.ecology101Tag")}
              </span>
              <h3 className="text-xl font-bold text-on-surface mb-3">{t("projects.ecology101")}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{t("projects.ecology101Desc")}</p>
              <button className="text-primary font-bold text-sm group-hover:underline">{t("projects.discover")}</button>
            </div>
          </div>

          {/* NYC Spirit */}
          <div className="md:col-span-5 group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                alt={t("projects.nycSpirit")}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={projects[2].image}
              />
            </div>
            <div className="p-8">
              <span className="inline-block px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold tracking-widest uppercase rounded mb-3">
                {t("projects.nycSpiritTag")}
              </span>
              <h3 className="text-xl font-bold text-on-surface mb-3">{t("projects.nycSpirit")}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{t("projects.nycSpiritDesc")}</p>
              <button className="text-primary font-bold text-sm group-hover:underline">{t("projects.participationTerms")}</button>
            </div>
          </div>

          {/* American Dream */}
          <div className="md:col-span-7 group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 overflow-hidden">
                <img
                  alt={t("projects.americanDream")}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={projects[3].image}
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold tracking-widest uppercase rounded mb-3">
                  {t("projects.americanDreamTag")}
                </span>
                <h3 className="text-2xl font-bold text-on-surface mb-4">{t("projects.americanDream")}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8">{t("projects.americanDreamDesc")}</p>
                <div className="mt-auto">
                  <button className="w-full bg-surface-container-high text-primary py-3 rounded font-bold text-sm hover:bg-primary hover:text-white transition-colors duration-300">
                    {t("projects.applicationProcess")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-32 mb-24">
        <div className="relative bg-primary-container rounded-2xl p-12 overflow-hidden">
          <div className="absolute inset-0 editorial-gradient opacity-95" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-extrabold text-white mb-4">{t("projects.ctaTitle")}</h2>
              <p className="text-white/90 text-lg max-w-md">{t("projects.ctaDescription")}</p>
            </div>
            <button className="bg-white text-primary px-8 py-4 rounded-sm font-extrabold shadow-xl hover:scale-105 active:scale-95 transition-all">
              {t("projects.ctaButton")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
