import { useTranslation } from "react-i18next";
import PageSEO from "../components/PageSEO";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <>
      <PageSEO titleKey="seo.privacyTitle" descriptionKey="seo.privacyDesc" />
      
      <section className="bg-surface pt-32 pb-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-surface-container-lowest shadow-sm rounded-2xl p-10 md:p-16 border border-outline-variant/10">
            <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight mb-4">
              {t("privacy.headline")}
            </h1>
            <p className="text-sm font-bold text-outline uppercase tracking-widest mb-10 pb-10 border-b border-outline-variant/30">
              {t("privacy.lastUpdated")}
            </p>

            <div className="prose prose-slate max-w-none text-on-surface-variant leading-loose space-y-10">
              <p className="text-lg">
                {t("privacy.intro")}
              </p>

              {(t("privacy.sections", { returnObjects: true }) as Array<{ title: string; content: string }>).map((section, index) => (
                <div key={index} className="pt-4 border-t border-outline-variant/10 first:border-0 first:pt-0">
                  <h2 className="text-2xl font-bold text-on-surface mb-4">
                    {section.title}
                  </h2>
                  <p>
                    {section.content.includes("contact@taeb.us") ? (
                      <>
                        {section.content.split("contact@taeb.us")[0]}
                        <a href="mailto:contact@taeb.us" className="text-primary font-bold hover:underline">
                          contact@taeb.us
                        </a>
                        {section.content.split("contact@taeb.us")[1]}
                      </>
                    ) : (
                      section.content
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
