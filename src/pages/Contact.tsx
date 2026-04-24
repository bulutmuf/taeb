import { useTranslation } from "react-i18next";
import { contactInfo } from "../data/contact";
import SectionHeading from "../components/SectionHeading";
import ContactCard from "../components/ContactCard";
import PageSEO from "../components/PageSEO";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <PageSEO titleKey="seo.contactTitle" descriptionKey="seo.contactDesc" />
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-16">
        <SectionHeading
          badge="TAEB"
          title={t("contact.headline")}
          description={t("contact.description")}
          badgeTheme="surface"
        />
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm border border-outline-variant/10">
              <h2 className="text-2xl font-bold text-on-surface mb-8">{t("contact.formTitle")}</h2>
              <form 
                className="space-y-6" 
                action="https://formsubmit.co/support@taeb.us" 
                method="POST"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Contact Request from TAEB Website" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                      {t("contact.firstName")} *
                    </label>
                    <input
                      type="text"
                      name="First Name"
                      className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-3 px-0 text-sm transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                      {t("contact.lastName")} *
                    </label>
                    <input
                      type="text"
                      name="Last Name"
                      className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-3 px-0 text-sm transition-colors"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                    {t("contact.email")} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-3 px-0 text-sm transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                    {t("contact.message")} *
                  </label>
                  <textarea
                    name="Message"
                    rows={5}
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-3 px-0 text-sm resize-none transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="editorial-gradient text-white font-bold py-4 px-10 rounded-sm active:scale-95 transition-transform"
                >
                  {t("contact.submit")}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <ContactCard
                icon="call"
                title={t("contact.callTitle")}
                theme="primary"
                content={
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-primary transition-colors">
                    {contactInfo.phone}
                  </a>
                }
              />
              <ContactCard
                icon="mail"
                title={t("contact.emailTitle")}
                theme="tertiary"
                content={
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors break-all">
                    {contactInfo.email}
                  </a>
                }
              />
              <ContactCard
                icon="location_on"
                title={t("contact.officeTitle")}
                theme="secondary"
                content={<p>{contactInfo.address}</p>}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
