interface SectionHeadingProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  alignment?: "left" | "center" | "right";
  badgeTheme?: "primary" | "tertiary" | "surface";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  titleAccent,
  description,
  alignment = "left",
  badgeTheme = "primary",
  className = "",
}: SectionHeadingProps) {
  const getAlignmentClass = () => {
    switch (alignment) {
      case "center": return "text-center mx-auto";
      case "right": return "text-right ml-auto";
      default: return "text-left";
    }
  };

  const getBadgeClass = () => {
    switch (badgeTheme) {
      case "tertiary": return "bg-tertiary text-white";
      case "surface": return "bg-surface-container-high text-primary";
      default: return "bg-primary text-white";
    }
  };

  return (
    <div className={`max-w-2xl ${getAlignmentClass()} ${className}`}>
      {badge && (
        <span className={`inline-block px-3 py-1 font-bold text-[0.65rem] tracking-[0.15em] rounded mb-4 uppercase ${getBadgeClass()}`}>
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-6">
        {title} {titleAccent && <span className="text-primary italic">{titleAccent}</span>}
      </h2>
      {description && (
        <p className="text-xl text-on-surface-variant leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
