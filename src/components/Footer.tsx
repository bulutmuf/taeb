import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-[#E7E8E9] bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="space-y-6">
          <div className="text-xl font-bold text-slate-900">TAEB</div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            {t("footer.description")}
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>

        {/* Quick menu */}
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

        {/* Newsletter + Legal */}
        <div className="space-y-6">
          <div className="text-xs font-bold text-on-surface uppercase tracking-widest">
            {t("footer.newsletter")}
          </div>
          <div className="relative">
            <input
              className="w-full bg-white border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none px-0 py-3 text-sm"
              placeholder={t("footer.emailPlaceholder")}
              type="email"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-primary font-bold text-xs uppercase">
              {t("footer.subscribeButton")}
            </button>
          </div>
          <div className="pt-4 flex flex-col gap-2">
            <div className="text-slate-900 font-semibold text-sm">{t("footer.copyright")}</div>
            <a href="#" className="text-slate-500 text-xs hover:text-primary transition-colors">
              {t("footer.privacyPolicy")}
            </a>
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
