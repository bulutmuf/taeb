import { useTranslation } from "react-i18next";
import BlogSection from "../components/media/BlogSection";
import MagazineSection from "../components/media/MagazineSection";
import WebinarSection from "../components/media/WebinarSection";

export default function Media() {
  const { t } = useTranslation();

  return (
    <div className="pt-16 pb-16">
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <span className="inline-block py-1.5 px-4 mb-6 rounded-full text-xs font-bold tracking-widest text-primary bg-primary/10 select-none">
          {t("media.badge")}
        </span>
        <h1 className="font-editorial text-5xl md:text-7xl font-light text-on-surface leading-[1.1] mb-6">
          {t("media.headlineTitle")} <br />
          <span className="editorial-italic">{t("media.headlineAccent")}</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          {t("media.description")}
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <BlogSection />
        <MagazineSection />
        <WebinarSection />
      </div>
    </div>
  );
}
