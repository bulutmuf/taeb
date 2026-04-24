import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";

export default function Membership() {
  const { t } = useTranslation();

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <SectionHeading
          badge="TAEB"
          title={t("membership.headline") || "Üyelik Başvurusu"}
          description={t("membership.description") || "Topluluğumuzun bir parçası olmak için başvurunuzu hemen yapın."}
          badgeTheme="surface"
        />
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm border border-outline-variant/10">
            <h2 className="text-2xl font-bold text-on-surface mb-8">{t("membership.formTitle") || "Başvuru Formu"}</h2>
            <form 
              className="space-y-6"
              action="https://formsubmit.co/support@taeb.us" 
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Membership Application from TAEB Website" />
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="Phone"
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-3 px-0 text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                  Meslek / Okul *
                </label>
                <input
                  type="text"
                  name="Profession or School"
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-3 px-0 text-sm transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                  Neden TAEB'e Katılmak İstiyorsunuz?
                </label>
                <textarea
                  name="Motivation"
                  rows={4}
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-3 px-0 text-sm resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-on-surface text-surface py-4 px-10 rounded-sm font-bold tracking-widest hover:bg-primary transition-all active:scale-95"
              >
                BAŞVURUYU GÖNDER
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
