import { useTranslation } from "react-i18next";
import { useFormValidation } from "../hooks/useFormValidation";
import { contactInfo } from "../data/contact";
import SectionHeading from "../components/SectionHeading";
import ContactCard from "../components/ContactCard";
import PageSEO from "../components/PageSEO";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { error, setError, isSubmitting, isSuccess, validateEmail, submitData } = useFormValidation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    
    if (!validateEmail(email)) {
      setError(t("events.invalidEmail"));
      return;
    }

    const data = Object.fromEntries(formData.entries());
    await submitData({ ...data, _subject: "New Contact Request from TAEB Website" });
  };

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
              
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">{t("events.successMessage") || "Success!"}</h3>
                  <p className="text-green-700">{lang === "tr" ? "En kısa sürede size dönüş yapacağız." : "We will get back to you as soon as possible."}</p>
                </div>
              ) : (
                <form 
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                        {t("contact.firstName")} *
                      </label>
                      <input
                        type="text"
                        name="First Name"
                        className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-3 px-0 text-sm transition-colors disabled:opacity-50"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                        {t("contact.lastName")} *
                      </label>
                      <input
                        type="text"
                        name="Last Name"
                        className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-3 px-0 text-sm transition-colors disabled:opacity-50"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                      {t("contact.email")} *
                    </label>
                    {error && (
                      <div className="absolute -top-2 right-0 text-red-600 text-[10px] font-bold animate-fade-in-up">
                        {error}
                      </div>
                    )}
                    <input
                      type="email"
                      name="email"
                      className={`w-full bg-transparent border-0 border-b-2 transition-colors py-3 px-0 text-sm focus:outline-none ${error ? 'border-red-600' : 'border-outline-variant focus:border-primary'} disabled:opacity-50`}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                      {t("contact.message")} *
                    </label>
                    <textarea
                      name="Message"
                      rows={5}
                      className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-3 px-0 text-sm resize-none transition-colors disabled:opacity-50"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="editorial-gradient text-white font-bold py-4 px-10 rounded-sm active:scale-95 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {lang === "tr" ? "Gönderiliyor..." : "Sending..."}
                      </>
                    ) : (
                      t("contact.submit")
                    )}
                  </button>
                </form>
              )}
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
