import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/taeb-logo.svg";

const navLinks = [
  { to: "/", key: "nav.home" },
  {
    key: "nav.about",
    children: [
      { to: "/about", key: "nav.about" },
      { to: "/members", key: "nav.members" },
    ],
  },
  { to: "/projects", key: "nav.projects" },
  { to: "/events", key: "nav.events" },
  { to: "/internship", key: "nav.internship" },
  {
    key: "nav.media",
    children: [
      { to: "/media", key: "nav.media" },
      { to: "/media#blog", key: "nav.blog" },
    ],
  },
];

type NavItem =
  | { to: string; key: string; children?: undefined }
  | { key: string; to?: undefined; children: { to: string; key: string }[] };

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "tr" ? "en" : "tr");
  };

  const renderDesktopLink = (link: NavItem) => {
    if (link.children) {
      return (
        <div
          key={link.key}
          className="relative"
          onMouseEnter={() => setOpenDropdown(link.key)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <NavLink
            to={link.children[0].to}
            className={({ isActive }) =>
              `font-['Manrope'] text-sm tracking-tight transition-colors ${
                isActive
                  ? "text-tertiary font-bold border-b-2 border-tertiary pb-1"
                  : "text-slate-600 font-medium hover:text-slate-900"
              }`
            }
          >
            {t(link.key)}
          </NavLink>
          {openDropdown === link.key && (
            <div className="absolute left-0 top-full pt-2 min-w-[180px] z-50">
              <div className="rounded-lg border border-outline-variant/20 bg-white py-2 shadow-lg">
                {link.children.map((child) => (
                  <NavLink
                    key={child.to}
                    to={child.to}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm transition-colors ${
                        isActive
                          ? "text-primary font-bold bg-primary/5"
                          : "text-slate-600 hover:bg-surface-container-low hover:text-slate-900"
                      }`
                    }
                  >
                    {t(child.key)}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <NavLink
        key={link.to}
        to={link.to}
        end={link.to === "/"}
        className={({ isActive }) =>
          `font-['Manrope'] text-sm tracking-tight transition-colors ${
            isActive
              ? "text-tertiary font-bold border-b-2 border-tertiary pb-1"
              : "text-slate-600 font-medium hover:text-slate-900"
          }`
        }
      >
        {t(link.key)}
      </NavLink>
    );
  };

  const renderMobileLink = (link: NavItem) => {
    if (link.children) {
      return (
        <div key={link.key} className="space-y-1">
          <div className="py-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            {t(link.key)}
          </div>
          {link.children.map((child) => (
            <NavLink
              key={child.to}
              to={child.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block py-2 pl-3 text-sm font-medium tracking-tight transition-colors ${
                  isActive ? "text-primary font-bold" : "text-slate-600"
                }`
              }
            >
              {t(child.key)}
            </NavLink>
          ))}
        </div>
      );
    }

    return (
      <NavLink
        key={link.to}
        to={link.to}
        end={link.to === "/"}
        onClick={() => setMobileOpen(false)}
        className={({ isActive }) =>
          `block py-3 text-sm font-medium tracking-tight transition-colors ${
            isActive ? "text-primary font-bold" : "text-slate-600"
          }`
        }
      >
        {t(link.key)}
      </NavLink>
    );
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="TAEB Logo" className="h-14 w-auto transition-transform group-hover:scale-105" />
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => renderDesktopLink(link))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-xs font-bold text-slate-500 hover:text-primary transition-colors tracking-wide px-2 py-1"
          >
            {i18n.language === "tr" ? "EN" : "TR"}
          </button>

          <NavLink
            to="/contact"
            className="hidden sm:inline-block editorial-gradient text-white px-5 py-2 text-sm font-bold tracking-wide rounded-sm hover:opacity-90 transition-opacity active:scale-95"
          >
            {t("nav.contactUs")}
          </NavLink>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-slate-700"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-surface-container-high px-6 pb-6 space-y-1">
          {navLinks.map((link) => renderMobileLink(link))}
          <NavLink
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 editorial-gradient text-white text-center px-5 py-3 text-sm font-bold tracking-wide rounded-sm"
          >
            {t("nav.contactUs")}
          </NavLink>
        </div>
      )}

      <div className="bg-surface-container-low h-px w-full" />
    </nav>
  );
}
