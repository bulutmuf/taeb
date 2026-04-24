import { useState } from "react";
import { useTranslation } from "react-i18next";

interface TestimonialCardProps {
  quoteKey: string;
  name: string;
  image?: string;
}

export default function TestimonialCard({ quoteKey, name, image }: TestimonialCardProps) {
  const { t, i18n } = useTranslation();
  const [showTurkish, setShowTurkish] = useState(false);
  
  const isTurkishSite = i18n.language === 'tr';

  return (
    <div className="relative group bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-outline-variant/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden select-text">
      {/* Decorative Quote Icon */}
      <div className="absolute top-4 right-8 text-primary/5 select-none pointer-events-none">
        <span className="material-symbols-outlined text-8xl font-black">format_quote</span>
      </div>

      <div className="relative z-10">
        <p className="text-on-surface-variant font-editorial text-xl italic leading-relaxed mb-10 min-h-[100px]">
          "{showTurkish ? t(quoteKey, { lng: 'tr' }) : t(quoteKey, { lng: 'en' })}"
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-primary to-secondary transition-transform group-hover:scale-105 duration-500">
              <div className="w-full h-full rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden">
                {image ? (
                  <img src={image} alt={name} className="w-full h-full object-cover" />
                ) : (
                  <span className="material-symbols-outlined text-on-surface-variant text-xl">person</span>
                )}
              </div>
            </div>
            <div>
              <span className="block font-bold text-on-surface text-base">{name}</span>
              <span className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">PharmD Intern</span>
            </div>
          </div>

          {isTurkishSite && (
            <button 
              onClick={() => setShowTurkish(!showTurkish)}
              className="px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase transition-all duration-300 border border-primary/20 hover:bg-primary hover:text-white select-none active:scale-95"
            >
              {showTurkish ? "Read Original" : "Türkçe Oku"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
