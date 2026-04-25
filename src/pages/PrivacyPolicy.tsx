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

              <div>
                <h2 className="text-2xl font-bold text-on-surface mb-4">
                  {t("privacy.sections.dataCollection.title")}
                </h2>
                <p>{t("privacy.sections.dataCollection.content")}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-on-surface mb-4">
                  {t("privacy.sections.dataUse.title")}
                </h2>
                <p>{t("privacy.sections.dataUse.content")}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-on-surface mb-4">
                  {t("privacy.sections.dataProtection.title")}
                </h2>
                <p>{t("privacy.sections.dataProtection.content")}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-on-surface mb-4">
                  {t("privacy.sections.userRights.title")}
                </h2>
                <p>{t("privacy.sections.userRights.content")}</p>
              </div>

              <div className="bg-surface-container p-8 rounded-xl border-l-4 border-primary">
                <h2 className="text-2xl font-bold text-on-surface mb-4">
                  {t("privacy.sections.contact.title")}
                </h2>
                <p className="mb-0">
                  {t("privacy.sections.contact.content").split('contact@taeb.us')[0]}
                  <a href="mailto:contact@taeb.us" className="text-primary font-bold hover:underline">
                    contact@taeb.us
                  </a>
                  {t("privacy.sections.contact.content").split('contact@taeb.us')[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
