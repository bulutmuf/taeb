import { useTranslation } from "react-i18next";
import { boardOfDirectors, advisoryBoard, representatives } from "../data/members";

export default function Members() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <span className="inline-block px-3 py-1 bg-surface-container-high text-primary font-bold text-[0.65rem] tracking-[0.15em] rounded mb-4 uppercase">
          TAEB
        </span>
        <h1 className="text-[3.5rem] md:text-[4.5rem] font-extrabold leading-[1.05] tracking-tight text-on-surface mb-6">
          {t("members.headline")}
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl">
          {t("members.description")}
        </p>
      </section>

      {/* Board of Directors */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-on-surface mb-12">{t("members.boardTitle")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {boardOfDirectors.map((member, i) => (
              <div key={i} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm text-center hover:-translate-y-1 transition-transform">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-on-surface-variant">person</span>
                </div>
                <h3 className="font-bold text-on-surface text-sm mb-1">{member.name}</h3>
                <p className="text-xs text-on-surface-variant">{lang === "tr" ? member.roleTr : member.roleEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-on-surface mb-12">{t("members.advisoryTitle")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {advisoryBoard.map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl text-on-surface-variant">person</span>
                </div>
                <h3 className="font-bold text-on-surface text-sm">{member.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Representatives */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-on-surface mb-4">{t("members.representativesTitle")}</h2>
          <p className="text-on-surface-variant mb-12">
            {representatives.length} {t("members.representativesCount")}
          </p>
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-surface-container-high">
                  <tr>
                    <th className="text-left px-6 py-4 font-bold text-on-surface text-xs uppercase tracking-widest">
                      {lang === "tr" ? "Isim" : "Name"}
                    </th>
                    <th className="text-left px-6 py-4 font-bold text-on-surface text-xs uppercase tracking-widest">
                      {lang === "tr" ? "Universite" : "University"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {representatives.map((rep, i) => (
                    <tr key={i} className="border-t border-outline-variant/10 hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-4 text-on-surface font-medium">{rep.name}</td>
                      <td className="px-6 py-4 text-on-surface-variant">{rep.university}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
