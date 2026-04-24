import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-surface text-on-surface select-none">
      <div className="select-text">
        <Navbar />
      </div>
      <main className="flex-grow pt-0 animate-fade-in-up" key={pathname}>
        <Outlet />
      </main>
      <div className="select-text">
        <Footer />
      </div>
    </div>
  );
}
