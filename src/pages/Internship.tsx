import { useTranslation } from "react-i18next";
import { upcomingInterns, pastInterns } from "../data/interns";
import SectionHeading from "../components/SectionHeading";
import PageSEO from "../components/PageSEO";
import MemberCard from "../components/MemberCard";
import TestimonialCard from "../components/TestimonialCard";

export default function Internship() {
  const { t } = useTranslation();

  return (
    <>
      <PageSEO titleKey="seo.internshipTitle" descriptionKey="seo.internshipDesc" />
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-16">
        <SectionHeading
          badge="TAEB"
          title={t("internship.headline")}
          description={t("internship.description")}
          badgeTheme="surface"
        />
      </section>

      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-white flex flex-col items-center text-center">
              <span className="text-3xl font-black text-primary mb-2">100+</span>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t("internship.stats.interns")}</span>
            </div>
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-white flex flex-col items-center text-center">
              <span className="text-3xl font-black text-primary mb-2">20+</span>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t("internship.stats.countries")}</span>
            </div>
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-white flex flex-col items-center text-center">
              <span className="text-3xl font-black text-primary mb-2">2013</span>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t("internship.stats.founded")}</span>
            </div>
          </div>

          <SectionHeading title={t("internship.testimonials")} className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard quoteKey="internship.testimonial_1.quote" name={t("internship.testimonial_1.name")} />
            <TestimonialCard quoteKey="internship.testimonial_2.quote" name={t("internship.testimonial_2.name")} />
            <TestimonialCard quoteKey="internship.testimonial_3.quote" name={t("internship.testimonial_3.name")} />
            <TestimonialCard quoteKey="internship.testimonial_4.quote" name={t("internship.testimonial_4.name")} />
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title={t("internship.upcomingInterns")} className="mb-4" />
          <p className="text-on-surface-variant mb-12">{upcomingInterns.length} interns selected for 2026</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {upcomingInterns.map((intern, i) => (
              <div key={i} className="group bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:-translate-y-1 transition-all flex flex-col h-full border border-outline-variant/10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110 flex-shrink-0">
                  {intern.image ? (
                    <img src={intern.image} alt={intern.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="material-symbols-outlined text-2xl text-on-surface-variant">person</span>
                  )}
                </div>
                <div className="flex-grow flex flex-col justify-start">
                  <h3 className="font-bold text-on-surface text-sm text-center mb-1 leading-tight">{intern.name}</h3>
                  {intern.university && (
                    <p className="text-[10px] md:text-xs text-on-surface-variant text-center mb-2 leading-tight">{intern.university}</p>
                  )}
                </div>
                {intern.scholarship && (
                  <p className="text-[9px] md:text-[10px] text-center font-bold text-primary bg-primary/5 rounded px-2 py-1 mt-auto uppercase tracking-wider">
                    {intern.scholarship}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title={t("internship.pastInterns")} className="mb-12" />
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-4 md:gap-6">
            {pastInterns.map((intern, i) => (
              <MemberCard
                key={i}
                name={intern.name}
                role={intern.year}
                image={intern.image}
                variant="intern"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
