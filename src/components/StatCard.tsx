interface StatCardProps {
  icon: string;
  value: string;
  label: string;
  description: string;
  theme?: "primary" | "tertiary" | "secondary";
  className?: string;
}

export default function StatCard({
  icon,
  value,
  label,
  description,
  theme = "tertiary",
  className = "",
}: StatCardProps) {
  const getThemeVars = () => {
    switch (theme) {
      case "primary": return { bg: "bg-primary/10", text: "text-primary" };
      case "secondary": return { bg: "bg-secondary/10", text: "text-secondary" };
      default: return { bg: "bg-tertiary/10", text: "text-tertiary" };
    }
  };

  const colors = getThemeVars();

  return (
    <div className={`bg-surface-container-lowest p-10 rounded-xl hover:-translate-y-1 transition-transform shadow-sm ${className}`}>
      <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-8 ${colors.bg}`}>
        <span className={`material-symbols-outlined text-3xl flex-shrink-0 ${colors.text}`}>{icon}</span>
      </div>
      <div className="text-4xl font-black text-on-surface mb-2">{value}</div>
      <div className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">{label}</div>
      <p className="mt-4 text-on-surface-variant text-sm leading-relaxed">{description}</p>
    </div>
  );
}
