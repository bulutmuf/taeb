import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLoading } from "../context/LoadingContext";

export default function Layout() {
  const { pathname } = useLocation();
  const { show, hide } = useLoading();

  // Scroll to top on every navigation.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  /**
   * On every route change, briefly hold the global overlay so the page
   * content doesn't snap in before the overlay finishes fading out.
   * For pages with asset preloaders (e.g. Members), their own show()/hide()
   * calls keep the overlay up longer via the counter in LoadingContext.
   */
  useLayoutEffect(() => {
    show();
    // A single rAF gives the browser time to paint the overlay before hiding.
    const raf = requestAnimationFrame(() => hide());
    return () => {
      cancelAnimationFrame(raf);
      hide();
    };
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="min-h-screen flex flex-col font-sans bg-surface text-on-surface select-none">
      <div className="select-text">
        <Navbar />
      </div>
      <main className="flex-grow pt-0 fade-in" key={pathname}>
        <Outlet />
      </main>
      <div className="select-text">
        <Footer />
      </div>
    </div>
  );
}
