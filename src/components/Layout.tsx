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
    const path = pathname.replace("/", "");
    const titleStr = path === "" ? t("nav.home") : t(`nav.${path}`);
    
    // Convert "ABOUT US" to "About Us" or "ANASAYFA" to "Anasayfa"
    const formattedTitle = titleStr
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');

    document.title = `${formattedTitle} - TAEB`;
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
