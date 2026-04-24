import { useTranslation } from "react-i18next";
import SectionHeading from "../../components/SectionHeading";

const magazines = [
  {
    id: 1,
    title: "TAEB Journal - Kış 2026",
    issue: "Sayı: 12",
    cover: "/assets/magazine-cover-1.webp",
    link: "#"
  },
  {
    id: 2,
    title: "TAEB Journal - Güz 2025",
    issue: "Sayı: 11",
    cover: "/assets/magazine-cover-2.webp",
    link: "#"
  },
  {
    id: 3,
    title: "TAEB Journal - Yaz 2025",
    issue: "Sayı: 10",
    cover: "/assets/magazine-cover-3.webp",
    link: "#"
  }
];

export default function MagazineSection() {
  const { t } = useTranslation();

  return (
    <section className="mb-24">
      <div className="mb-12">
        <SectionHeading
          badge={t("media.magazineBadge") || "DERGİ"}
          title={t("media.magazineTitle") || "Geçmiş Dergilerimiz"}
          description={t("media.magazineDescription") || "Yayınlanmış tüm TAEB Journal sayılarını arşivimizden PDF formatında okuyabilirsiniz."}
          badgeTheme="tertiary"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {magazines.map((mag) => (
          <a
            href={mag.link}
            key={mag.id}
            className="group block rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/10 bg-surface-container-lowest"
          >
            <div className="aspect-[3/4] bg-surface-variant/20 relative overflow-hidden flex items-center justify-center">
              {/* Fallback pattern in case image doesn't load */}
              <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
              </div>
              
              <img
                src={mag.cover}
                alt={mag.title}
                loading="lazy"
                className="w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600" fill="%23f3f4f6"><rect width="100%25" height="100%25" fill="%23f3f4f6"/><text x="50%25" y="50%25" font-family="sans-serif" font-size="24" fill="%239ca3af" text-anchor="middle" dominant-baseline="middle">PDF KAPAK EKLENECEK</text></svg>';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end justify-center pb-8">
                <span className="bg-white/90 text-primary font-bold py-2 px-6 rounded-full text-sm">Okumak İçin Tıkla</span>
              </div>
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-tertiary uppercase tracking-wider mb-2 block">{mag.issue}</span>
              <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">{mag.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
