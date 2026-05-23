interface StatCardProps {
  value: string;
  label: string;
  description: string;
  theme?: "primary" | "tertiary" | "secondary";
  className?: string;
}

export default function StatCard({
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
      <div className={`mb-8 h-1.5 w-16 rounded-full ${colors.bg}`} />
      <div className={`text-6xl md:text-7xl font-black tracking-tight mb-4 ${colors.text}`}>{value}</div>
      <div className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">{label}</div>
      <p className="mt-4 text-on-surface-variant text-sm leading-relaxed">{description}</p>
    </div>
  );
}
