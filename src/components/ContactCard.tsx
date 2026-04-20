interface ContactCardProps {
  icon: string;
  title: string;
  content: React.ReactNode;
  theme?: "primary" | "secondary" | "tertiary";
}

export default function ContactCard({ icon, title, content, theme = "primary" }: ContactCardProps) {
  const getThemeVars = () => {
    switch (theme) {
      case "secondary": return { bg: "bg-secondary/10", text: "text-secondary" };
      case "tertiary": return { bg: "bg-tertiary/10", text: "text-tertiary" };
      default: return { bg: "bg-primary/10", text: "text-primary" };
    }
  };

  const colors = getThemeVars();

  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colors.bg}`}>
          <span className={`material-symbols-outlined ${colors.text}`}>{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-on-surface">{title}</h3>
      </div>
      <div className="text-on-surface-variant text-sm font-medium">
        {content}
      </div>
    </div>
  );
}
