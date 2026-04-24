import { useTranslation } from "react-i18next";
import SectionHeading from "../../components/SectionHeading";

const webinars = [
  {
    id: 1,
    title: "Klinik Eczacılık ve Hasta İletişimi",
    date: "10 Şubat 2026",
    thumbnail: "/assets/webinar-1.webp",
    link: "#",
    speaker: "Uzm. Ecz. Ayşe Çelik"
  },
  {
    id: 2,
    title: "Yurt Dışı Burs ve Staj İmkânları",
    date: "15 Aralık 2025",
    thumbnail: "/assets/webinar-2.webp",
    link: "#",
    speaker: "Dr. Mehmet Öztürk"
  },
  {
    id: 3,
    title: "E-Reçete Sistemleri ve Veri Güvenliği",
    date: "20 Ekim 2025",
    thumbnail: "/assets/webinar-3.webp",
    link: "#",
    speaker: "Av. Cengiz Aksoy"
  }
];

export default function WebinarSection() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="mb-12">
        <SectionHeading
          badge={t("media.webinarBadge") || "WEBİNAR"}
          title={t("media.webinarTitle") || "Webinar Kayıtları"}
          description={t("media.webinarDescription") || "Kaçırdığınız veya tekrar izlemek istediğiniz çevrimiçi eğitim, seminer ve söyleşi kayıtlarımız."}
          badgeTheme="surface"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {webinars.map((webinar) => (
          <a
            href={webinar.link}
            key={webinar.id}
            className="group block rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/10 bg-surface-container-lowest"
          >
            <div className="aspect-video bg-surface-variant/20 relative overflow-hidden flex items-center justify-center">
              <img
                src={webinar.thumbnail}
                alt={webinar.title}
                loading="lazy"
                className="w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" fill="%23f3f4f6"><rect width="100%25" height="100%25" fill="%23f3f4f6"/><text x="50%25" y="50%25" font-family="sans-serif" font-size="24" fill="%239ca3af" text-anchor="middle" dominant-baseline="middle">VİDEO KAPAK EKLENECEK</text></svg>';
                }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 z-20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">{webinar.date}</span>
              </div>
              <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors mb-2">{webinar.title}</h3>
              <div className="flex items-center gap-2 mt-4 text-sm font-medium text-on-surface-variant/70">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                {webinar.speaker}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
