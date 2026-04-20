import { useTranslation } from "react-i18next";
import { upcomingInterns, pastInterns, testimonials } from "../data/interns";
import SectionHeading from "../components/SectionHeading";
import MemberCard from "../components/MemberCard";
import TestimonialCard from "../components/TestimonialCard";

export default function Internship() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <SectionHeading
          badge="TAEB"
          title={t("internship.headline")}
          description={t("internship.description")}
          badgeTheme="surface"
        />
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title={t("internship.testimonials")} className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((item, i) => (
              <TestimonialCard key={i} quote={item.quote} name={item.name} image={item.image} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Interns */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title={t("internship.upcomingInterns")} className="mb-4" />
          <p className="text-on-surface-variant mb-12">{upcomingInterns.length} interns selected for 2026</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {upcomingInterns.map((intern, i) => (
              <div key={i} className="group bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
                  {intern.image ? (
                    <img src={intern.image} alt={intern.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="material-symbols-outlined text-2xl text-on-surface-variant">person</span>
                  )}
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
          <SectionHeading title={t("internship.pastInterns")} className="mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
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
