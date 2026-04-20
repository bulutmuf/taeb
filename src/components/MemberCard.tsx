interface MemberCardProps {
  name: string;
  role?: string;
  image?: string;
  variant?: "board" | "advisory" | "intern";
}

export default function MemberCard({ name, role, image, variant = "board" }: MemberCardProps) {
  if (variant === "intern" || variant === "advisory") {
    // Smaller circular cards for bottom
    return (
      <div className="text-center group">
        <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="material-symbols-outlined text-2xl text-on-surface-variant">person</span>
          )}
        </div>
        <h3 className="font-bold text-on-surface text-sm">{name}</h3>
        {role && <p className="text-xs text-on-surface-variant mt-1">{role}</p>}
      </div>
    );
  }

  // Board Variant
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm text-center hover:-translate-y-1 transition-transform border border-outline-variant/10">
      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="material-symbols-outlined text-3xl text-on-surface-variant">person</span>
        )}
      </div>
      <h3 className="font-bold text-on-surface text-sm mb-1">{name}</h3>
      {role && <p className="text-xs text-on-surface-variant">{role}</p>}
    </div>
  );
}
