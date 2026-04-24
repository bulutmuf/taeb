import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import PageSEO from "../components/PageSEO";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <PageSEO titleKey="seo.projectsTitle" descriptionKey="seo.projectsDesc" />
      <section className="max-w-7xl mx-auto px-6 pt-16 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <SectionHeading
            badge={t("projects.badge")}
            title={t("projects.headline")}
            description={t("projects.description")}
            badgeTheme="surface"
          />
          <div className="hidden md:block">
            <div className="flex gap-2">
              <div className="w-12 h-1 bg-primary" />
              <div className="w-12 h-1 bg-outline-variant/30" />
              <div className="w-12 h-1 bg-outline-variant/30" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} t={t} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-32 mb-24">
        <div className="relative bg-primary-container rounded-2xl p-12 overflow-hidden">
          <div className="absolute inset-0 editorial-gradient opacity-95" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-extrabold text-white mb-4">{t("projects.ctaTitle")}</h2>
              <p className="text-white/90 text-lg max-w-md">{t("projects.ctaDescription")}</p>
            </div>
            <button className="bg-white text-primary px-8 py-4 rounded-sm font-extrabold shadow-xl hover:scale-105 active:scale-95 transition-all">
              {t("projects.ctaButton")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
