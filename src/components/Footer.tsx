import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useFormValidation } from "../hooks/useFormValidation";
import { contactInfo } from "../data/contact";
import logo from "../assets/taeb-logo.svg";

export default function Footer() {
  const { t } = useTranslation();
  const { error, setError, isSubmitting, isSuccess, validateEmail, checkDuplicateEmail, markEmailAsSubscribed, submitData } = useFormValidation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    
    if (!validateEmail(email)) {
      setError(t("events.invalidEmail") || "Lütfen geçerli bir e-posta adresi girin.");
      return;
    }

    if (checkDuplicateEmail(email)) {
      setError(t("events.alreadySubscribed") || "Bu e-posta adresi zaten bültenimize kayıtlı.");
      return;
    }

    const data = {
      email,
      _subject: "Newsletter Subscription (Footer)!"
    };

    const success = await submitData(data);
    if (success) {
      markEmailAsSubscribed(email);
    }
  };

  return (
    <footer className="w-full border-t border-[#E7E8E9] bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-6">
          <img src={logo} alt="TAEB Logo" className="h-12 w-auto" />
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            {t("footer.description")}
          </p>
          <div className="flex space-x-4">
            <a
              href={contactInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-all hover:scale-110"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href={contactInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-all hover:scale-110"
              title="Instagram"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href={contactInfo.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-all hover:scale-110"
              title="X (Twitter)"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-all hover:scale-110"
              title="Email"
            >
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="text-xs font-bold text-on-surface uppercase tracking-widest mb-2">
              {t("footer.quickMenu")}
            </div>
            <NavLink to="/" className="block text-slate-500 hover:text-[#007FFF] transition-colors text-sm">
              {t("nav.home")}
            </NavLink>
            <NavLink to="/about" className="block text-slate-500 hover:text-[#007FFF] transition-colors text-sm">
              {t("nav.about")}
            </NavLink>
            <NavLink to="/projects" className="block text-slate-500 hover:text-[#007FFF] transition-colors text-sm">
              {t("nav.projects")}
            </NavLink>
          </div>
          <div className="space-y-4 pt-6">
            <NavLink to="/events" className="block text-slate-500 hover:text-[#007FFF] transition-colors text-sm">
              {t("nav.events")}
            </NavLink>
            <NavLink to="/internship" className="block text-slate-500 hover:text-[#007FFF] transition-colors text-sm">
              {t("nav.internship")}
            </NavLink>
            <NavLink to="/members" className="block text-slate-500 hover:text-[#007FFF] transition-colors text-sm">
              {t("nav.members")}
            </NavLink>
            <NavLink to="/contact" className="block text-slate-500 hover:text-[#007FFF] transition-colors text-sm">
              {t("nav.contact")}
            </NavLink>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-xs font-bold text-on-surface uppercase tracking-widest">
            {t("footer.newsletter")}
          </div>
          <form 
            className="relative"
            onSubmit={handleSubmit}
            noValidate
          >
            {error && (
              <div className="absolute -top-7 left-0 text-red-600 text-[10px] font-bold transition-all duration-300 animate-in fade-in slide-in-from-bottom-1">
                {error}
              </div>
            )}
            {isSuccess && (
              <div className="absolute -top-7 left-0 text-green-600 text-[10px] font-bold transition-all duration-300 animate-in fade-in slide-in-from-bottom-1">
                {t("events.successMessage") || "Success! Thank you for subscribing."}
              </div>
            )}
            <input
              name="email"
              className={`w-full bg-white border-0 border-b-2 transition-colors px-0 py-3 text-sm focus:outline-none ${error ? 'border-red-600' : 'border-outline-variant focus:border-primary'}`}
              placeholder={t("footer.emailPlaceholder")}
              type="email"
              disabled={isSubmitting || isSuccess}
              required
            />
            <button 
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`absolute right-0 top-1/2 -translate-y-1/2 font-bold text-xs uppercase ${isSubmitting ? 'text-slate-400' : 'text-primary'}`}
            >
              {isSubmitting ? "..." : t("footer.subscribeButton")}
            </button>
          </form>
          <div className="pt-4 flex flex-col gap-2">
            <div className="text-slate-900 font-semibold text-sm">{t("footer.copyright")}</div>
            <NavLink to="/contact" className="text-slate-500 text-xs hover:text-primary transition-colors">
              {t("footer.privacyPolicy")}
            </NavLink>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 border-t border-outline-variant/20 flex justify-between items-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        <div>&copy; {t("footer.copyright")}</div>
        <div>{t("footer.established")}</div>
      </div>
    </footer>
  );
}
