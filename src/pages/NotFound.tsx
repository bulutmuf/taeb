import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PageSEO from "../components/PageSEO";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <PageSEO titleKey="seo.notFoundTitle" descriptionKey="" />
      
      <section className="bg-surface pt-40 pb-24 min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        {/* Subtle Background Gradients matching TAEB styling */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-xl mx-auto px-6 text-center relative z-10">
          <div className="text-[120px] md:text-[180px] font-black text-on-surface leading-none tracking-tighter mix-blend-overlay opacity-90 mb-4 select-none">
            {t("notFound.title")}
          </div>
          
          <div className="bg-surface-container-lowest/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 md:p-12 border border-white/20 -mt-16 md:-mt-24 relative">
            <h1 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">
              {t("notFound.subtitle")}
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              {t("notFound.description")}
            </p>
            
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <span className="material-symbols-outlined mr-2 text-[20px]">home</span>
              {t("notFound.backHome")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
