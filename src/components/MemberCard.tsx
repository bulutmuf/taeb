import { useState } from "react";
import { getMemberImageCandidates } from "../utils/memberImage";

/** Tries each candidate URL in order; falls back to the placeholder icon. */
function MemberImage({ name, size }: { name: string; size: "sm" | "lg" }) {
  const candidates = getMemberImageCandidates(name);
  const [index, setIndex] = useState(0);
  const failed = index >= candidates.length;

  const sizeClass = size === "sm"
    ? "w-14 h-14 md:w-16 md:h-16"
    : "w-20 h-20";
  const iconClass = size === "sm" ? "text-2xl" : "text-3xl";

  return (
    <div
      className={`${sizeClass} mx-auto rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden flex-shrink-0`}
    >
      {failed ? (
        <span className={`material-symbols-outlined ${iconClass} text-on-surface-variant`}>
          person
        </span>
      ) : (
        <img
          src={candidates[index]}
          alt={name}
          className="w-full h-full object-cover"
          onError={() => setIndex((i) => i + 1)}
        />
      )}
    </div>
  );
}

interface MemberCardProps {
  name: string;
  role?: string;
  /** Optional explicit image URL. If provided, skips auto-resolution. */
  image?: string;
  variant?: "board" | "advisory" | "intern";
}

export default function MemberCard({ name, role, image, variant = "board" }: MemberCardProps) {
  // Advisory / intern variant — small circular card
  if (variant === "intern" || variant === "advisory") {
    return (
      <div className="flex flex-col h-full items-center text-center group">
        <div className="transition-transform group-hover:scale-110 mb-4">
          {image ? (
            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden flex-shrink-0">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
          ) : (
            <MemberImage name={name} size="sm" />
          )}
        </div>
        <div className="flex-grow flex flex-col justify-start">
          <h3 className="font-bold text-on-surface text-sm leading-tight mb-1">{name}</h3>
          {role && (
            <p className="text-[10px] md:text-xs text-on-surface-variant leading-tight">{role}</p>
          )}
        </div>
      </div>
    );
  }

  // Board variant — larger card
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm text-center transition-colors border border-outline-variant/10 hover:bg-surface-container-low flex flex-col h-full w-full">
      <div className="mb-4">
        {image ? (
          <div className="w-20 h-20 mx-auto rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden flex-shrink-0">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        ) : (
          <MemberImage name={name} size="lg" />
        )}
      </div>
      <div className="flex flex-col flex-grow justify-start">
        <h3 className="font-bold text-on-surface text-sm mb-1 leading-tight">{name}</h3>
        {role && (
          <p className="text-xs text-on-surface-variant leading-relaxed">{role}</p>
        )}
      </div>
    </div>
  );
}
