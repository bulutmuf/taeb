import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { upcomingEvents } from "../data/events";

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[870px] flex items-center bg-surface overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary-container rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-tertiary-container rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10">
          <div className="md:col-span-7">
            <span className="inline-block px-3 py-1 bg-surface-container-high text-primary font-bold text-[0.65rem] tracking-[0.15em] rounded mb-6 uppercase">
              {t("home.badge")}
            </span>
            <h1 className="text-[3.5rem] md:text-[4.5rem] font-extrabold leading-[1.05] tracking-tight mb-6 text-on-surface">
              {t("home.headline")} <br />
              <span className="text-primary italic">{t("home.headlineAccent")}</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
              {t("home.description")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="editorial-gradient text-on-primary px-8 py-4 rounded-lg font-bold text-base hover:opacity-90 transition-opacity shadow-lg"
              >
                {t("home.joinUs")}
              </Link>
              <Link
                to="/projects"
                className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-lg font-bold text-base hover:bg-surface-container-high transition-colors"
              >
                {t("home.explorePrograms")}
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative">
              <img
                alt="Professional meeting environment"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQuYb56MkbWPY77Kvs5Snf9VHLYFnLPN3zWxemf9mSopaYnRBCd2jQsLbMgEJrHOiJNR7AAi7r7V69A7SBr4zQDt9j_9a4qUDsUXuT4NENq9m4ib6MNWEey8TIwrBEQmFiv5fhfbqNAHCfG2ji6i1GBV1laNFddzLevB5lYhN-yKDXL4rl4gugYA5g9mJvyuYPSwPN8WkZP3O-ymbz6zc4LWgXklrUzM3cPsyf1DsMFjLtAg26CzAevAgK2VYp4VZ5b-G7M7u52P8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border-l-4 border-tertiary">
              <div className="text-3xl font-black text-on-surface">{t("home.awardYear")}</div>
              <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                {t("home.awardLabel")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-4">
                {t("home.impactTitle")}
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                {t("home.impactDescription")}
              </p>
            </div>
            <div className="hidden md:block h-[2px] flex-grow mx-12 bg-outline-variant opacity-20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "payments", value: t("home.totalScholarship"), label: t("home.totalScholarshipLabel"), desc: t("home.totalScholarshipDesc") },
              { icon: "school", value: t("home.masterScholarship"), label: t("home.masterScholarshipLabel"), desc: t("home.masterScholarshipDesc") },
              { icon: "flight_takeoff", value: t("home.freeInternship"), label: t("home.freeInternshipLabel"), desc: t("home.freeInternshipDesc") },
            ].map((stat) => (
              <div key={stat.icon} className="bg-surface-container-lowest p-10 rounded-xl hover:-translate-y-1 transition-transform">
                <div className="w-14 h-14 rounded-lg bg-tertiary/10 flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-tertiary text-3xl">{stat.icon}</span>
                </div>
                <div className="text-4xl font-black text-on-surface mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</div>
                <p className="mt-4 text-on-surface-variant text-sm leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
              {t("home.calendarLabel")}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mt-3">
              {t("home.upcomingEvents")}
            </h2>
          </div>

          <div className="space-y-4">
            {upcomingEvents.slice(0, 3).map((event) => (
              <div
                key={event.id}
                className="group flex flex-col md:flex-row items-center gap-6 p-8 bg-surface-container-low hover:bg-surface-container rounded-xl transition-colors"
              >
                <div className="flex-shrink-0 text-center md:text-left min-w-[120px]">
                  <div className="text-3xl font-black text-tertiary">{event.day}</div>
                  <div className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">
                    {event.month} {event.year}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-secondary/10 text-secondary uppercase">
                      {event.type}
                    </span>
                    <span className="text-on-surface-variant text-sm">{event.time}</span>
                  </div>
                  <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                    {lang === "tr" ? event.titleTr : event.titleEn}
                  </h3>
                </div>
                <Link
                  to="/events"
                  className="px-6 py-2 border border-outline-variant rounded-lg text-sm font-bold hover:bg-on-surface hover:text-surface transition-all"
                >
                  {t("home.details")}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/events" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
              {t("home.viewAllEvents")}
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
