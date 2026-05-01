import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LoadingOverlay from "./components/LoadingOverlay";
import { LoadingProvider, useLoading } from "./context/LoadingContext";

const Home       = lazy(() => import("./pages/Home"));
const About      = lazy(() => import("./pages/About"));
const Projects   = lazy(() => import("./pages/Projects"));
const Events     = lazy(() => import("./pages/Events"));
const Internship = lazy(() => import("./pages/Internship"));
const Members    = lazy(() => import("./pages/Members"));
const Contact    = lazy(() => import("./pages/Contact"));
const Media      = lazy(() => import("./pages/Media"));
const Membership = lazy(() => import("./pages/Membership"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound   = lazy(() => import("./pages/NotFound"));

/**
 * Renders the loading overlay whenever any page signals it is still loading
 * (e.g. Members waiting for profile images). Lives outside Suspense so it
 * can appear after the JS bundle has already resolved.
 */
function GlobalOverlay() {
  const { active } = useLoading();
  if (!active) return null;
  return <LoadingOverlay />;
}

export default function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        {/* Suspense overlay handles initial JS bundle loading */}
        <Suspense fallback={<LoadingOverlay />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about"      element={<About />} />
              <Route path="projects"   element={<Projects />} />
              <Route path="events"     element={<Events />} />
              <Route path="internship" element={<Internship />} />
              <Route path="members"    element={<Members />} />
              <Route path="contact"    element={<Contact />} />
              <Route path="media"      element={<Media />} />
              <Route path="membership" element={<Membership />} />
              <Route path="privacy"    element={<PrivacyPolicy />} />
              <Route path="*"          element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>

        {/* Context-driven overlay handles post-bundle asset loading */}
        <GlobalOverlay />
      </LoadingProvider>
    </BrowserRouter>
  );
}
