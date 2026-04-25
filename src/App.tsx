import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PageSkeleton, { HomeSkeleton } from "./components/PageSkeleton";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Events = lazy(() => import("./pages/Events"));
const Internship = lazy(() => import("./pages/Internship"));
const Members = lazy(() => import("./pages/Members"));
const Contact = lazy(() => import("./pages/Contact"));
const Media = lazy(() => import("./pages/Media"));
const Membership = lazy(() => import("./pages/Membership"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route 
            index 
            element={
              <Suspense fallback={<HomeSkeleton />}>
                <Home />
              </Suspense>
            } 
          />
          <Route 
            path="*" 
            element={
              <Suspense fallback={<PageSkeleton />}>
                <Routes>
                  <Route path="about" element={<About />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="events" element={<Events />} />
                  <Route path="internship" element={<Internship />} />
                  <Route path="members" element={<Members />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="media" element={<Media />} />
                  <Route path="membership" element={<Membership />} />
                </Routes>
              </Suspense>
            } 
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
