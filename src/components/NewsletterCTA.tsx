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
              className="flex flex-col md:flex-row gap-4"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Newsletter Subscription!" />
              <input type="hidden" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_template" value="box" />
              
              <input
                name="email"
                className="flex-grow bg-transparent border-0 border-b-2 border-outline-variant focus:outline-none focus:border-primary transition-colors py-4 px-0 placeholder:text-outline-variant text-on-surface text-base"
                placeholder={t(placeholderKey)}
                type="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
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
