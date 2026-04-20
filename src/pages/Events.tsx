import { useTranslation } from "react-i18next";
import { pastEvents, featuredEvent } from "../data/events";

export default function Events() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[409px] flex items-center bg-surface overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-10"
            alt="Event background"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWK2f8NJKqXn5ZNW4QNcpgNtAioJdD-UC2Wm-65Hb68uY4ERAJUykwUm9niUBK369dRyjLjJTIQE8NIX9XTovhsOGZZeWBdAAJI3peXL0WL1kjQ9sQJSOwqkjwlsn2Xty4oAUq2UIHFYH5rs-NaeRQGHtEbnmdkS8tM9HqQ9A8VLaowoRaVomzC8AUJWeief6bwIEB4yXRnQMMYor3Jyi9icgYNUSr22WOB5CurotensB5DDBNgbeTUDuLLI1Wv5FVownJiFwYY8k"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="uppercase tracking-widest text-primary font-bold mb-4 block text-sm">
                {t("events.badge")}
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-none">
                {t("events.headline")}
              </h1>
            </div>
            <div className="max-w-md">
              <p className="text-on-surface-variant text-lg leading-relaxed">{t("events.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Upcoming Event */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-3xl font-bold tracking-tight mb-4">{t("events.upcomingTitle")}</h2>
                <p className="text-on-surface-variant mb-8">{t("events.upcomingDescription")}</p>
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

      {/* Past Events */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold tracking-tighter mb-4">{t("events.pastTitle")}</h2>
              <p className="text-on-surface-variant leading-relaxed">{t("events.pastDescription")}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {pastEvents.map((event) => (
              <div key={event.id} className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6 bg-surface-container-high">
                  {event.image && (
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={lang === "tr" ? event.titleTr : event.titleEn}
                      src={event.image}
                    />
                  )}
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary tracking-widest uppercase">{event.month} {event.year}</span>
                    <span className="text-xs font-medium text-on-surface-variant">{event.location}</span>
                  </div>
                  <h3 className="text-xl font-extrabold tracking-tight group-hover:text-primary transition-colors">
                    {lang === "tr" ? event.titleTr : event.titleEn}
                  </h3>
                  <div className="space-y-2">
                    <p className="text-sm text-on-surface leading-relaxed">
                      {lang === "tr" ? event.descriptionTr : event.descriptionEn}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Archive placeholder */}
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

      {/* Newsletter CTA */}
      <section className="py-20 bg-surface-container-high">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-surface-container-lowest p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl font-extrabold tracking-tighter mb-6">{t("events.newsletterTitle")}</h2>
              <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">{t("events.newsletterDescription")}</p>
              <form className="flex flex-col md:flex-row gap-4">
                <input
                  className="flex-grow bg-transparent border-0 border-b-2 border-outline-variant focus:outline-none focus:border-primary transition-colors py-4 px-0 placeholder:text-outline-variant"
                  placeholder={t("events.emailPlaceholder")}
                  type="email"
                />
                <button
                  type="submit"
                  className="editorial-gradient text-white font-bold py-4 px-10 rounded-sm whitespace-nowrap active:scale-95 transition-transform"
                >
                  {t("events.subscribe")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
