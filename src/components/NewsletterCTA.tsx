import { useTranslation } from "react-i18next";
import { useFormValidation } from "../hooks/useFormValidation";

interface NewsletterCTAProps {
  titleKey: string;
  descKey: string;
  placeholderKey: string;
  buttonKey: string;
  className?: string;
}

export default function NewsletterCTA({
  titleKey,
  descKey,
  placeholderKey,
  buttonKey,
  className = "",
}: NewsletterCTAProps) {
  const { t } = useTranslation();
  const { error, setError, validateEmail } = useFormValidation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    
    if (!validateEmail(email)) {
      e.preventDefault();
      setError(t("events.invalidEmail"));
    }
  };

  return (
    <section className={`py-20 bg-surface-container-high ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-surface-container-lowest p-12 md:p-20 relative overflow-hidden rounded-2xl shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-6">{t(titleKey)}</h2>
            <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">{t(descKey)}</p>
            <form 
              action="https://formsubmit.co/support@taeb.us" 
              method="POST"
              className="flex flex-col md:flex-row gap-4 relative"
              onSubmit={handleSubmit}
              noValidate
            >
              <input type="hidden" name="_subject" value="New Newsletter Subscription!" />
              <input type="hidden" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_template" value="box" />
              
              <div className="flex-grow group relative">
                {error && (
                  <div className="absolute -top-7 left-0 text-red-600 text-xs font-bold transition-all duration-300 animate-in fade-in slide-in-from-bottom-1">
                    {error}
                  </div>
                )}
                <input
                  name="email"
                  className={`w-full bg-transparent border-0 border-b-2 transition-colors py-4 px-0 placeholder:text-outline-variant text-on-surface text-base focus:outline-none ${error ? 'border-red-600' : 'border-outline-variant focus:border-primary'}`}
                  placeholder={t(placeholderKey)}
                  type="email"
                  required
                />
              </div>
              <button
                type="submit"
                className="editorial-gradient text-white font-bold py-4 px-10 rounded-sm whitespace-nowrap active:scale-95 transition-transform"
              >
                {t(buttonKey)}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
