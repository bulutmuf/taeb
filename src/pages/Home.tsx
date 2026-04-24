import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { upcomingEvents } from "../data/events";
import StatCard from "../components/StatCard";
import EventCard from "../components/EventCard";
import SectionHeading from "../components/SectionHeading";

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <>
      <section className="relative min-h-[870px] flex items-center bg-surface overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary-container rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-tertiary-container rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10">
          <div className="md:col-span-7">
            <SectionHeading
              badge={t("home.badge")}
              title={t("home.headline")}
              titleAccent={t("home.headlineAccent")}
              description={t("home.description")}
              badgeTheme="surface"
              className="mb-10"
            />
            <div className="flex flex-wrap gap-4">
              <Link
                to="/membership"
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

      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <SectionHeading
              title={t("home.impactTitle")}
              description={t("home.impactDescription")}
            />
            <div className="hidden md:block h-[2px] flex-grow mx-12 bg-outline-variant opacity-20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              icon="payments"
              value={t("home.totalScholarship")}
              label={t("home.totalScholarshipLabel")}
              description={t("home.totalScholarshipDesc")}
              theme="tertiary"
            />
            <StatCard
              icon="school"
              value={t("home.masterScholarship")}
              label={t("home.masterScholarshipLabel")}
              description={t("home.masterScholarshipDesc")}
              theme="tertiary"
            />
            <StatCard
              icon="flight_takeoff"
              value={t("home.freeInternship")}
              label={t("home.freeInternshipLabel")}
              description={t("home.freeInternshipDesc")}
              theme="tertiary"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={t("home.calendarLabel")}
            title={t("home.upcomingEvents")}
            alignment="center"
            badgeTheme="surface"
            className="mb-16"
          />

          <div className="space-y-4">
            {upcomingEvents.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} variant="upcoming" lang={lang} t={t} />
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
