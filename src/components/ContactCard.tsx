interface ContactCardProps {
  icon: string;
  title: string;
  content: React.ReactNode;
  theme?: "primary" | "secondary" | "tertiary";
}

export default function ContactCard({ icon, title, content, theme = "primary" }: ContactCardProps) {
  const getThemeText = () => {
    switch (theme) {
      case "secondary": return "text-secondary";
      case "tertiary": return "text-primary"; // Changed from tertiary (red) to primary for a better look
      default: return "text-primary";
    }
  };

  const textColor = getThemeText();

  return (
    <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-outline-variant/10 group">
      <div className="flex flex-col items-start gap-4">
        <span className={`material-symbols-outlined text-4xl ${textColor} transition-transform group-hover:scale-110 duration-300`}>
          {icon}
        </span>
        <div>
          <h3 className="text-xl font-bold text-on-surface mb-2">{title}</h3>
          <div className="text-on-surface-variant text-sm font-medium leading-relaxed">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}
