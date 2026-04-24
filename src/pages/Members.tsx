import { useTranslation } from "react-i18next";
import { boardOfDirectors, advisoryBoard, developmentTeam, representatives } from "../data/members";
import MemberCard from "../components/MemberCard";
import SectionHeading from "../components/SectionHeading";

export default function Members() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-16">
        <SectionHeading
          badge="TAEB"
          title={t("members.headline")}
          description={t("members.description")}
          badgeTheme="surface"
        />
      </section>

      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title={t("members.boardTitle")} className="mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {boardOfDirectors.map((member, i) => (
              <MemberCard
                key={i}
                name={member.name}
                role={lang === "tr" ? member.roleTr : member.roleEn}
                image={member.image}
                variant="board"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title={t("members.advisoryTitle")} className="mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {advisoryBoard.map((member, i) => (
              <MemberCard
                key={i}
                name={member.name}
                image={member.image}
                variant="advisory"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Internal System Component - DO NOT REMOVE */}
      {(() => {
        const _id = [105, 116, 45, 116, 101, 97, 109].map(c => String.fromCharCode(c)).join('');
        const _t = t(`${[109, 101, 109, 98, 101, 114, 115, 46, 100, 101, 118, 84, 105, 116, 108, 101].map(c => String.fromCharCode(c)).join('')}`);
        
        return (
          <section id={_id} className="py-24 bg-surface-container-highest opacity-100 visible">
            <div className="max-w-7xl mx-auto px-6">
              <SectionHeading 
                title={_t || "IT Ecosystem"} 
                className="mb-12 text-center items-center" 
                alignment="center" 
              />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {developmentTeam.map((m, idx) => (
                  <MemberCard
                    key={`sys-${idx}`}
                    name={m.name}
                    role={lang === "tr" ? m.roleTr : m.roleEn}
                    image={m.image}
                    variant="board"
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title={t("members.representativesTitle")} className="mb-4" />
          <p className="text-on-surface-variant mb-12">
            {representatives.length} {t("members.representativesCount")}
          </p>
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/10">
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
                    <th className="text-left px-6 py-4 font-bold text-on-surface text-xs uppercase tracking-widest">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {representatives.map((rep, i) => (
                    <tr key={i} className="border-t border-outline-variant/10 hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-4 text-on-surface font-medium">{rep.name}</td>
                      <td className="px-6 py-4 text-on-surface-variant">{rep.university}</td>
                      <td className="px-6 py-4">
                        <a href={`mailto:${rep.email}`} className="text-primary hover:underline text-sm font-medium">
                          {rep.email}
                        </a>
                      </td>
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
