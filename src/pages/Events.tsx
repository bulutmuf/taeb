import { useTranslation } from "react-i18next";
import { pastEvents, featuredEvent } from "../data/events";
import EventCard from "../components/EventCard";
import SectionHeading from "../components/SectionHeading";
import NewsletterCTA from "../components/NewsletterCTA";

export default function Events() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <>
      <section className="relative h-[409px] flex items-center bg-surface pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-10"
            alt="Event background"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWK2f8NJKqXn5ZNW4QNcpgNtAioJdD-UC2Wm-65Hb68uY4ERAJUykwUm9niUBK369dRyjLjJTIQE8NIX9XTovhsOGZZeWBdAAJI3peXL0WL1kjQ9sQJSOwqkjwlsn2Xty4oAUq2UIHFYH5rs-NaeRQGHtEbnmdkS8tM9HqQ9A8VLaowoRaVomzC8AUJWeief6bwIEB4yXRnQMMYor3Jyi9icgYNUSr22WOB5CurotensB5DDBNgbeTUDuLLI1Wv5FVownJiFwYY8k"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <SectionHeading
            badge={t("events.badge")}
            title={t("events.headline")}
            description={t("events.description")}
            badgeTheme="surface"
          />
        </div>
      </section>

      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-32">
                <SectionHeading
                  title={t("events.upcomingTitle")}
                  description={t("events.upcomingDescription")}
                  className="mb-8"
                />
                <div className="bg-tertiary text-white inline-flex items-center px-4 py-2 gap-2 text-sm font-bold rounded-sm">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>event</span>
                  {t("events.upcoming")}
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="bg-surface-container-lowest p-8 md:p-12 rounded-lg shadow-sm border-l-4 border-tertiary">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                  <div>
                    <span className="text-primary font-bold text-xl block mb-2">{featuredEvent.date.replace("2026-02-", "")} {lang === "tr" ? "SUBAT" : "FEB"} 2026</span>
                    <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                      {lang === "tr" ? featuredEvent.titleTr : featuredEvent.titleEn}
                    </h3>
                  </div>
                  <div className="bg-surface-container-high px-6 py-4 text-center rounded-sm">
                    <span className="block text-2xl font-black">{featuredEvent.day}</span>
                    <span className="text-xs font-bold opacity-60">{lang === "tr" ? featuredEvent.monthTr : featuredEvent.month}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <p className="text-on-surface font-medium leading-relaxed">
                    {lang === "tr" ? featuredEvent.descriptionTr : featuredEvent.descriptionEn}
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-on-surface-variant">
                      <span className="material-symbols-outlined">location_on</span>
                      <span className="text-sm font-medium">{featuredEvent.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-on-surface-variant">
                      <span className="material-symbols-outlined">schedule</span>
                      <span className="text-sm font-medium">{featuredEvent.time}</span>
                    </div>
                  </div>
                </div>

                <button className="bg-on-surface text-surface px-8 py-4 text-sm font-bold tracking-widest hover:bg-primary transition-all active:scale-95">
                  {t("events.registerNow")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title={t("events.pastTitle")}
            description={t("events.pastDescription")}
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} variant="past" lang={lang} t={t} />
            ))}

            <div className="group opacity-40 hover:opacity-100 transition-opacity">
              <div className="aspect-[4/3] flex items-center justify-center rounded-lg mb-6 border-2 border-dashed border-outline-variant bg-surface-container-low">
                <span className="material-symbols-outlined text-4xl text-outline-variant">history</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-extrabold tracking-tight text-outline">{t("events.archiveTitle")}</h3>
                <p className="text-sm text-on-surface-variant">{t("events.archiveDescription")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors section temporarily hidden per user request
      <section className="py-24 bg-surface-container-lowest border-t border-surface-container-high/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title={t("events.sponsorsTitle") || "Sponsorlarımız"}
            description={t("events.sponsorsDescription") || "Etkinliklerimizde bize destek olan ve vizyonumuzu paylaşan kıymetli destekçilerimiz."}
            className="mb-16 text-center mx-auto items-center"
            alignment="center"
          />

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-32 h-16 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img 
                  src={`/assets/sponsor-${i}.webp`} 
                  alt={`Sponsor ${i}`} 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="128" height="64" fill="none"><rect width="100%25" height="100%25" fill="none"/><text x="50%25" y="50%25" font-family="sans-serif" font-weight="bold" font-size="16" fill="%2364748b" text-anchor="middle" dominant-baseline="middle">LOGO ${i}</text></svg>`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      <NewsletterCTA
        titleKey="events.newsletterTitle"
        descKey="events.newsletterDescription"
        placeholderKey="events.emailPlaceholder"
        buttonKey="events.subscribe"
      />
    </>
  );
}
