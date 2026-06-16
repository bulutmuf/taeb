import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { pastEvents } from "../data/events";
import homeRight from "../assets/home-right.jpg";
import StatCard from "../components/StatCard";
import EventCard from "../components/EventCard";
import SectionHeading from "../components/SectionHeading";
import PageSEO from "../components/PageSEO";

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const headlineAccent = t("home.headlineAccent");
  const [typedAccent, setTypedAccent] = useState(headlineAccent);
  const [activeImpactIndex, setActiveImpactIndex] = useState(0);
  const impactStats = [
    {
      value: t("home.totalScholarship"),
      label: t("home.totalScholarshipLabel"),
      description: t("home.totalScholarshipDesc"),
    },
    {
      value: t("home.masterScholarship"),
      label: t("home.masterScholarshipLabel"),
      description: t("home.masterScholarshipDesc"),
    },
    {
      value: t("home.freeInternship"),
      label: t("home.freeInternshipLabel"),
      description: t("home.freeInternshipDesc"),
    },
  ];
  const showPreviousImpact = () => {
    setActiveImpactIndex((current) => (current === 0 ? impactStats.length - 1 : current - 1));
  };
  const showNextImpact = () => {
    setActiveImpactIndex((current) => (current + 1) % impactStats.length);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setTypedAccent(headlineAccent);
      return;
    }

    setTypedAccent("");
    let index = 0;
    const intervalId = window.setInterval(() => {
      index += 1;
      setTypedAccent(headlineAccent.slice(0, index));

      if (index >= headlineAccent.length) {
        window.clearInterval(intervalId);
      }
    }, 85);

    return () => window.clearInterval(intervalId);
  }, [headlineAccent]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImpactIndex((current) => (current + 1) % impactStats.length);
    }, 8000);

    return () => window.clearInterval(intervalId);
  }, [impactStats.length]);

  return (
    <>
      <PageSEO titleKey="seo.homeTitle" descriptionKey="seo.homeDesc" />
      <section className="relative min-h-[760px] flex items-center bg-on-surface pt-24 md:pt-0 overflow-hidden">
        <img
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          src={homeRight}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-on-surface/90 via-on-surface/68 to-on-surface/18" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-surface-container-low to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 font-bold text-[0.65rem] tracking-[0.15em] rounded mb-5 uppercase bg-surface-container-high text-primary">
              {t("home.badge")}
            </span>
            <h1 className="mb-8 text-5xl font-extrabold tracking-normal text-white md:text-7xl lg:text-8xl">
              <span className="block">{t("home.headline")}</span>
              <span className="block text-primary-container italic" aria-label={headlineAccent}>
                {typedAccent}
                <span className="home-typewriter-caret" aria-hidden="true" />
              </span>
            </h1>
            <p className="mb-10 max-w-3xl text-xl leading-relaxed text-white/84 md:text-2xl">
              {t("home.description")}
            </p>
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
        </div>
      </section>

      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 flex justify-center">
            <SectionHeading
              title={t("home.impactTitle")}
              description={t("home.impactDescription")}
              alignment="center"
            />
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeImpactIndex * 100}%)` }}
              >
                {impactStats.map((stat) => (
                  <div key={stat.label} className="min-w-full px-1">
                    <StatCard
                      value={stat.value}
                      label={stat.label}
                      description={stat.description}
                      theme="tertiary"
                      className="min-h-[300px]"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={showPreviousImpact}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-container-lowest text-primary shadow-sm transition-colors hover:bg-surface-container-high"
                aria-label="Previous impact metric"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <div className="flex items-center gap-2">
                {impactStats.map((stat, index) => (
                  <button
                    key={stat.label}
                    type="button"
                    onClick={() => setActiveImpactIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeImpactIndex === index ? "w-8 bg-primary" : "w-2.5 bg-outline-variant"
                    }`}
                    aria-label={`Show ${stat.label}`}
                    aria-current={activeImpactIndex === index}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={showNextImpact}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-container-lowest text-primary shadow-sm transition-colors hover:bg-surface-container-high"
                aria-label="Next impact metric"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={t("home.calendarLabel")}
            title={t("events.pastTitle")}
            alignment="center"
            badgeTheme="surface"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {pastEvents.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} variant="past" lang={lang} t={t} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/events" className="inline-flex items-center gap-2 text-primary font-bold transition-transform duration-300 hover:scale-105">
              {t("home.viewAllEvents")}
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
