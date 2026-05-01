import { lazy, Suspense, useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LoadingOverlay from "./components/LoadingOverlay";
import { LoadingProvider, useLoading } from "./context/LoadingContext";

const Home        = lazy(() => import("./pages/Home"));
const About       = lazy(() => import("./pages/About"));
const Projects    = lazy(() => import("./pages/Projects"));
const Events      = lazy(() => import("./pages/Events"));
const Internship  = lazy(() => import("./pages/Internship"));
const Members     = lazy(() => import("./pages/Members"));
const Contact     = lazy(() => import("./pages/Contact"));
const Media       = lazy(() => import("./pages/Media"));
const Membership  = lazy(() => import("./pages/Membership"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound    = lazy(() => import("./pages/NotFound"));

const FADE_OUT_MS = 400; // must match .overlay-exit animation duration in CSS

/**
 * Context-driven overlay that:
 *   - fades IN  when active becomes true
 *   - plays a fade-OUT animation then unmounts when active becomes false
 */
function GlobalOverlay() {
  const { active } = useLoading();
  const [mounted, setMounted]   = useState(false);
  const [exiting, setExiting]   = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (active) {
      // Cancel any in-progress exit, re-show immediately.
      if (timerRef.current) clearTimeout(timerRef.current);
      setExiting(false);
      setMounted(true);
    } else if (mounted) {
      // Start the exit animation, then unmount after it completes.
      setExiting(true);
      timerRef.current = setTimeout(() => {
        setMounted(false);
        setExiting(false);
      }, FADE_OUT_MS);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!mounted) return null;
  return <LoadingOverlay className={exiting ? "overlay-exit" : "overlay-enter"} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        {/* Suspense overlay — shown while the page JS bundle is downloading. */}
        <Suspense fallback={<LoadingOverlay />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index           element={<Home />} />
              <Route path="about"       element={<About />} />
              <Route path="projects"    element={<Projects />} />
              <Route path="events"      element={<Events />} />
              <Route path="internship"  element={<Internship />} />
              <Route path="members"     element={<Members />} />
              <Route path="contact"     element={<Contact />} />
              <Route path="media"       element={<Media />} />
              <Route path="membership"  element={<Membership />} />
              <Route path="privacy"     element={<PrivacyPolicy />} />
              <Route path="*"           element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>

        {/* Context-driven overlay — animated fade-in/out, used by asset preloaders. */}
        <GlobalOverlay />
      </LoadingProvider>
    </BrowserRouter>
  );
}
