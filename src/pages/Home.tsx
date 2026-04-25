import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { upcomingEvents } from "../data/events";
import homeRight from "../assets/home-right.jpg";
import StatCard from "../components/StatCard";
import EventCard from "../components/EventCard";
import SectionHeading from "../components/SectionHeading";
import PageSEO from "../components/PageSEO";

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <>
      <PageSEO titleKey="seo.homeTitle" descriptionKey="seo.homeDesc" />
      <section className="relative min-h-[700px] flex items-center bg-surface pt-16 md:pt-0 overflow-hidden">
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
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl relative">
              <img
                alt="Professional meeting environment"
                className="w-full h-full object-cover"
                src={homeRight}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-high/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:bg-primary group cursor-default">
              <div className="relative">
                <div className="text-4xl font-black text-on-surface tracking-tighter mb-1 transition-colors group-hover:text-white">{t("home.awardYear")}</div>
                <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] leading-none transition-colors group-hover:text-white/90">
                  {t("home.awardLabel")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smooth Transition Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-surface-container-low to-transparent pointer-events-none" />
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
