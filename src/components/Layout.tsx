import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  // Handle Scroll to Top & Page Title
  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic Title Generation based on path
    let pageTitle = "TAEB";
    const path = pathname.replace("/", "");
    
    if (path === "") {
      pageTitle = t("nav.home") + " - TAEB";
    } else if (["about", "projects", "events", "internship", "members", "contact"].includes(path)) {
      // Use translation namespace or direct keys if they exist
      pageTitle = t(`nav.${path}`) + " - TAEB";
    }
    
    document.title = pageTitle;
  }, [pathname, t]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-surface text-on-surface">
      <Navbar />
      <main className="flex-grow pt-24 animate-fade-in-up" key={pathname}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
