import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";
import { secureContent } from "../utils/security";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative bg-surface pt-0 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              badge={t("about.badge")}
              badgeTheme="tertiary"
              title={t("about.headline")}
              titleAccent={t("about.headlineAccent")}
              description={t("about.description")}
            />
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover relative z-0"
                alt="International cooperation"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaRJgWd0erUB2GBKflieqwbBymLTGCiWsLYk7Gzih5Qa8wHVneqHoRsRUQ6aT5jPdArQUyKfOJIThEZqsmY5PCobkkvBl1p31fuzMMBfr_U5LoTM61fhlYVMasWFcwHLPmLhvP1wcBip0-t4tRNyxFL7wIuCIw80rSvEO9fNvPOkLZjyrEYq7eSAcJESeXZ-hZRSt_ZaxLNxr_-TSEOJnzepFmkDG2KxIbDCipPeiQyL_8YQ_NWja60t5T2o6DBq-Fp5chhyQsvZY"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-8 shadow-lg max-w-[240px] z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  stars
                </span>
                <span className="text-tertiary font-bold tracking-tighter text-2xl">
                  {t("about.activeMembersCount")}
                </span>
              </div>
              <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">
                {t("about.activeMembersLabel")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3 md:sticky md:top-32 h-fit">
              <h2 className="text-3xl font-bold tracking-tight text-on-surface mb-4">{t("about.historyTitle")}</h2>
              <div className="w-12 h-1 bg-primary mb-6" />
              <p className="text-on-surface-variant text-sm leading-loose">
                {secureContent(t("about.historyDescription"))}
              </p>
            </div>
            <div className="md:w-2/3 space-y-16">
              <div className="bg-surface-container-lowest p-12 shadow-sm rounded-lg border-l-4 border-primary hover:shadow-md transition-shadow">
                <h3 className="text-5xl font-black text-surface-container-highest mb-6">{t("about.year2014")}</h3>
                <h4 className="text-xl font-bold mb-4">{t("about.year2014Title")}</h4>
                <p className="text-on-surface-variant leading-relaxed">{t("about.year2014Desc")}</p>
              </div>
              <div className="bg-surface-container-lowest p-12 shadow-sm rounded-lg border-l-4 border-tertiary hover:shadow-md transition-shadow">
                <h3 className="text-5xl font-black text-surface-container-highest mb-6">{t("about.year2026")}</h3>
                <h4 className="text-xl font-bold mb-4">{t("about.year2026Title")}</h4>
                <p className="text-on-surface-variant leading-relaxed">{t("about.year2026Desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 bg-primary p-10 flex flex-col justify-between h-64 rounded-xl hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined text-white text-4xl">language</span>
              <div>
                <p className="text-white/80 text-sm font-medium uppercase tracking-widest mb-1">{t("about.operationalScope")}</p>
                <h3 className="text-white text-3xl font-bold">{t("about.twoCountries")}</h3>
              </div>
            </div>
            <div className="bg-surface-container-high p-10 flex flex-col justify-between h-64 rounded-xl hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined text-tertiary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
              <div>
                <p className="text-on-surface-variant text-sm font-medium uppercase tracking-widest mb-1">{t("about.memberCount")}</p>
                <h3 className="text-on-surface text-3xl font-bold">{t("about.memberCountValue")}</h3>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-10 flex flex-col justify-between h-64 rounded-xl shadow-sm hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined text-primary text-4xl">event_available</span>
              <div>
                <p className="text-on-surface-variant text-sm font-medium uppercase tracking-widest mb-1">{t("about.annualEvents")}</p>
                <h3 className="text-on-surface text-3xl font-bold">{t("about.annualEventsValue")}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div className="border-b border-outline-variant/30 pb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-primary">flag</span>
                  </div>
                  <h3 className="text-2xl font-bold">{t("about.missionTitle")}</h3>
                </div>
                <p className="text-on-surface-variant leading-loose italic">"{t("about.missionText")}"</p>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-tertiary/10 flex items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-tertiary">visibility</span>
                  </div>
                  <h3 className="text-2xl font-bold">{t("about.visionTitle")}</h3>
                </div>
                <p className="text-on-surface-variant leading-loose italic">"{t("about.visionText")}"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-outline mb-12 uppercase">{t("about.partners")}</p>
          <div className="flex flex-wrap justify-center gap-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {["ACADEMIA", "TECH-CORP", "GLOBAL-BRIDGE", "INNOVA-US", "TURK-USA"].map((name) => (
              <div key={name} className="font-black text-2xl text-on-surface-variant cursor-pointer">{name}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
