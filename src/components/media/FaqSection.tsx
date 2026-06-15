import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SectionHeading from "../../components/SectionHeading";
import { faqItems } from "../../data/blog";

export default function FaqSection() {
  const { t } = useTranslation();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash.startsWith("#blog-post-")) return;

    const target = document.querySelector(hash);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    target.classList.add("ring-2", "ring-primary/40");
    const timer = window.setTimeout(() => {
      target.classList.remove("ring-2", "ring-primary/40");
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section id="faq" className="mb-24 scroll-mt-28">
      <div className="mb-12">
        <SectionHeading
          badge={t("media.faqBadge")}
          title={t("media.faqTitle")}
          description={t("media.faqDescription")}
          badgeTheme="surface"
        />
      </div>

      <div className="space-y-3">
        {faqItems.map((item) => (
          <a
            key={item.id}
            href={`#blog-post-${item.blogPostId}`}
            className="group flex items-center justify-between rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-6 py-5 transition-all hover:border-primary/50 hover:shadow-sm"
          >
            <span className="font-semibold text-on-surface group-hover:text-primary transition-colors">
              {t(item.questionKey)}
            </span>
            <span className="material-symbols-outlined text-primary opacity-0 transition-opacity group-hover:opacity-100">
              arrow_forward
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
