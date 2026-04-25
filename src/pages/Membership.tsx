import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";
import PageSEO from "../components/PageSEO";
import { useFormValidation } from "../hooks/useFormValidation";

export default function Membership() {
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

    const data: any = { _subject: "New Membership Application from TAEB Website" };
    formData.forEach((value, key) => {
      data[key] = value;
    });
    
    await submitData(data);
  };

  return (
    <>
      <PageSEO titleKey="seo.membershipTitle" descriptionKey="seo.membershipDesc" />
      <section className="max-w-7xl mx-auto px-6 pt-0 pb-16">
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
            
            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  <span className="material-symbols-outlined text-3xl">how_to_reg</span>
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">{t("events.successMessage") || "Application Received!"}</h3>
                <p className="text-green-700">{lang === "tr" ? "Başvurunuz başarıyla alındı. Değerlendirme sonrası iletişime geçeceğiz." : "We have received your application. We will contact you after review."}</p>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="Phone"
                      className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-3 px-0 text-sm transition-colors disabled:opacity-50"
                      disabled={isSubmitting}
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
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-3 px-0 text-sm transition-colors disabled:opacity-50"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                    Neden TAEB'e Katılmak İstiyorsunuz?
                  </label>
                  <textarea
                    name="Motivation"
                    rows={4}
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-3 px-0 text-sm resize-none transition-colors disabled:opacity-50"
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-on-surface text-surface py-4 px-10 rounded-sm font-bold tracking-widest hover:bg-primary transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {lang === "tr" ? "GÖNDERİLİYOR..." : "SENDING..."}
                    </>
                  ) : (
                    "BAŞVURUYU GÖNDER"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
