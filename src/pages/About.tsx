import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";
import PageSEO from "../components/PageSEO";

export default function About() {
  const { t } = useTranslation();
  const historyItems = [
    {
      year: t("about.year2014"),
      title: t("about.year2014Title"),
      description: t("about.year2014Desc"),
    },
    {
      year: t("about.year2018"),
      title: t("about.year2018Title"),
      description: t("about.year2018Desc"),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8UjoxTvRoftVq33kobTAiakmc0buf9fJqB9FDAODdQ-5vcnYphht-FdDWvx1cvJO0IAwt3x9zDs42YXOFQ7CBsiS7UdNOR_kc376L3paQUg2aEldaGr8iMl5CYz3xvqfIJmR-OHah4XAGBfAS3HxPLd8P1SJZ1H1tliE2GyzSn7yq6BTFfjY6xFQkyIO3MeHgVmwd-oAyoBBwraL4_pTPBJcbmbas4WQR9qD3zqrE4NEKUB24RxLFcdN_qmirVpYHebVgrggL-AU",
    },
    {
      year: t("about.year2019"),
      title: t("about.year2019Title"),
      description: t("about.year2019Desc"),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCN_Cb0x_UlbiE38rKSztRDICV8YjYoKkqV07wWsUBQm5pwJgv40buUH6hxZIMyYC4p38vhTvSA8n0ORzKVMJj3w5PbTolGmcp6soR1qRgXS26fLPA5mOfbBy87QOeR__Lb7hLe17BcWwdyY5qDa-Xr77NtcqbiK197YWhgAFHqaZsYPRxooqJ7f6PCG5V9fjzkm4AcYVV4bjS9gimUV78pUMKkKgxcu4DTOAZZZUwyJG2qsRJQYy6XgVYtAFb_VtxBl3YqxWxFY-U",
    },
    {
      year: t("about.year2020_1"),
      title: t("about.year2020_1Title"),
      description: t("about.year2020_1Desc"),
    },
    {
      year: t("about.year2020_2"),
      title: t("about.year2020_2Title"),
      description: t("about.year2020_2Desc"),
    },
    {
      year: t("about.year2021"),
      title: t("about.year2021Title"),
      description: t("about.year2021Desc"),
    },
    {
      year: t("about.year2026"),
      title: t("about.year2026Title"),
      description: t("about.year2026Desc"),
    },
  ];

  return (
    <>
      <PageSEO titleKey="seo.aboutTitle" descriptionKey="seo.aboutDesc" />
      <section className="relative bg-surface pt-16 pb-24 overflow-hidden">
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
            <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover relative z-0"
                alt="Statue of Liberty and Galata Tower"
                src="/images/about/amerika-turkiye.jpeg"
              />
            </div>
            <div className="absolute top-4 left-4 md:-top-6 md:-left-6 bg-surface-container-lowest p-5 md:p-8 shadow-lg max-w-[220px] md:max-w-[280px] z-10 transition-all duration-300">
              <div className="flex items-start gap-2 mb-3">
                <span className="material-symbols-outlined text-tertiary text-xl md:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  stars
                </span>
                <span className="text-tertiary font-black tracking-tighter text-4xl md:text-6xl leading-none">
                  {t("about.activeMembersCount")}
                </span>
              </div>
              <p className="text-[10px] md:text-xs font-semibold text-on-surface-variant uppercase tracking-widest leading-tight">
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
                {t("about.historyDescription")}
              </p>
            </div>
            <div className="md:w-2/3 overflow-x-auto pb-4">
              <div className="relative pt-12 min-w-max">
                <div className="absolute top-16 left-0 right-0 h-0.5 bg-primary/25" />
                <div className="flex gap-8 pr-8">
                  {historyItems.map((item) => (
                    <div key={item.year + item.title} className="relative w-80 flex-shrink-0">
                      {item.image && (
                        <div className="mb-4 aspect-[4/3] overflow-hidden rounded-xl shadow-sm">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}
                      <div className="relative z-10 mb-8 flex items-center gap-4">
                        <div className="h-9 w-9 rounded-full border-4 border-surface-container-low bg-primary shadow-sm" />
                        <h3 className="text-4xl font-black text-primary">{item.year}</h3>
                      </div>
                      <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-all h-52 overflow-y-auto">
                        <h4 className="text-lg font-bold mb-2 line-clamp-2">{item.title}</h4>
                        <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            <div className="bg-surface-container-high p-10 flex flex-col justify-between h-64 rounded-xl hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined text-tertiary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
              <div>
                <h3 className="text-on-surface text-5xl font-black tracking-tight mb-3">{t("about.memberCountValue")}</h3>
                <p className="text-on-surface-variant text-sm font-medium uppercase tracking-widest">{t("about.memberCount")}</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-10 flex flex-col justify-between h-64 rounded-xl shadow-sm hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined text-primary text-4xl">workspace_premium</span>
              <div>
                <h3 className="text-on-surface text-5xl font-black tracking-tight mb-3">{t("about.experienceValue")}</h3>
                <p className="text-on-surface-variant text-sm font-medium uppercase tracking-widest">{t("about.experience")}</p>
              </div>
            </div>
            <div className="bg-primary p-10 flex flex-col items-center justify-center text-center h-56 rounded-xl hover:-translate-y-1 transition-transform md:col-span-2">
              <span className="material-symbols-outlined text-white text-4xl">language</span>
              <div>
                <p className="text-white/80 text-sm font-medium uppercase tracking-widest mb-1">{t("about.operationalScope")}</p>
                <h3 className="text-white text-3xl font-bold">{t("about.twoCountries")}</h3>
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
                <p className="text-on-surface-variant leading-loose italic">{t("about.missionText")}</p>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-tertiary/10 flex items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-tertiary">visibility</span>
                  </div>
                  <h3 className="text-2xl font-bold">{t("about.visionTitle")}</h3>
                </div>
                <p className="text-on-surface-variant leading-loose italic">{t("about.visionText")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
