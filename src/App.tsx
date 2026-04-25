import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LoadingOverlay from "./components/LoadingOverlay";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Events = lazy(() => import("./pages/Events"));
const Internship = lazy(() => import("./pages/Internship"));
const Members = lazy(() => import("./pages/Members"));
const Contact = lazy(() => import("./pages/Contact"));
const Media = lazy(() => import("./pages/Media"));
const Membership = lazy(() => import("./pages/Membership"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOverlay />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="events" element={<Events />} />
            <Route path="internship" element={<Internship />} />
            <Route path="members" element={<Members />} />
            <Route path="contact" element={<Contact />} />
            <Route path="media" element={<Media />} />
            <Route path="membership" element={<Membership />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
