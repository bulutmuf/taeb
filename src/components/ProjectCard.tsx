import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  t: (key: string) => string;
}

export default function ProjectCard({ project, t }: ProjectCardProps) {
  // Shared styles for the wrapper depending on span
  const baseClasses = "group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500";
  
  if (project.span === "large") {
    return (
      <div className={`md:col-span-8 ${baseClasses}`}>
        <div className="aspect-[16/9] overflow-hidden">
          <img
            alt={t(project.titleKey)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            src={project.image}
          />
        </div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="inline-block px-3 py-1 bg-tertiary text-white text-[10px] font-bold tracking-widest uppercase rounded mb-3">
                {t(project.tagKey)}
              </span>
              <h3 className="text-2xl font-bold text-on-surface">{t(project.titleKey)}</h3>
            </div>
            <span className="material-symbols-outlined text-primary text-3xl">{project.icon}</span>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6 max-w-2xl">
            {t(project.descKey)}
          </p>
          <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
            {t(project.ctaKey)} <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    );
  }

  if (project.span === "split") {
    return (
      <div className={`md:col-span-7 ${baseClasses}`}>
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 overflow-hidden">
            <img
              alt={t(project.titleKey)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src={project.image}
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <span className="inline-block px-3 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold tracking-widest uppercase rounded mb-3">
              {t(project.tagKey)}
            </span>
            <h3 className="text-2xl font-bold text-on-surface mb-4">{t(project.titleKey)}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">{t(project.descKey)}</p>
            <div className="mt-auto">
              <button className="w-full bg-surface-container-high text-primary py-3 rounded font-bold text-sm hover:bg-primary hover:text-white transition-colors duration-300">
                {t(project.ctaKey)}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Medium / Default
  return (
    <div className={`md:col-span-4 lg:col-span-4 ${baseClasses}`}>
      <div className="aspect-square overflow-hidden">
        <img
          alt={t(project.titleKey)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src={project.image}
        />
      </div>
      <div className="p-8">
        <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-widest uppercase rounded mb-3">
          {t(project.tagKey)}
        </span>
        <h3 className="text-xl font-bold text-on-surface mb-3">{t(project.titleKey)}</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{t(project.descKey)}</p>
        <button className="text-primary font-bold text-sm group-hover:underline">{t(project.ctaKey)}</button>
      </div>
    </div>
  );
}
