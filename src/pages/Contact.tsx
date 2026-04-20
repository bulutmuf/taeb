import { useTranslation } from "react-i18next";
import { contactInfo } from "../data/contact";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <span className="inline-block px-3 py-1 bg-surface-container-high text-primary font-bold text-[0.65rem] tracking-[0.15em] rounded mb-4 uppercase">
          TAEB
        </span>
        <h1 className="text-[3.5rem] md:text-[4.5rem] font-extrabold leading-[1.05] tracking-tight text-on-surface mb-6">
          {t("contact.headline")}
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl">
          {t("contact.description")}
        </p>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-on-surface mb-8">{t("contact.formTitle")}</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                      {t("contact.firstName")} *
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-3 px-0 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                      {t("contact.lastName")} *
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-3 px-0 text-sm"
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
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-3 px-0 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                    {t("contact.message")} *
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-3 px-0 text-sm resize-none"
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

            {/* Info Cards */}
            <div className="space-y-6">
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">call</span>
                  </div>
                  <h3 className="text-xl font-bold text-on-surface">{t("contact.callTitle")}</h3>
                </div>
                <a href={`tel:${contactInfo.phone}`} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">
                  {contactInfo.phone}
                </a>
              </div>

              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary">mail</span>
                  </div>
                  <h3 className="text-xl font-bold text-on-surface">{t("contact.emailTitle")}</h3>
                </div>
                <a href={`mailto:${contactInfo.email}`} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium break-all">
                  {contactInfo.email}
                </a>
              </div>

              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">location_on</span>
                  </div>
                  <h3 className="text-xl font-bold text-on-surface">{t("contact.officeTitle")}</h3>
                </div>
                <p className="text-on-surface-variant text-sm font-medium">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
