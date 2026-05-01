import { useState } from "react";
import { getMemberImageCandidates } from "../utils/memberImage";

/** Tries each candidate URL in order; falls back to the placeholder icon. */
function MemberImage({ name, size }: { name: string; size: "sm" | "lg" }) {
  const candidates = getMemberImageCandidates(name);
  const [index, setIndex] = useState(0);
  const failed = index >= candidates.length;

  const sizeClass = size === "sm" ? "w-14 h-14 md:w-16 md:h-16" : "w-20 h-20";
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
  /** Optional explicit image URL — overrides auto-resolution. */
  image?: string;
  /** LinkedIn handle (the part after linkedin.com/in/). Makes the card clickable. */
  linkedin?: string;
  variant?: "board" | "advisory" | "intern";
}

function LinkedInBadge() {
  return (
    <span
      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4 text-[#0077B5]"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    </span>
  );
}

export default function MemberCard({ name, role, image, linkedin, variant = "board" }: MemberCardProps) {
  const linkedinUrl = linkedin ? `https://www.linkedin.com/in/${linkedin}` : undefined;

  const wrapWithLink = (children: React.ReactNode, extraClass = "") => {
    if (linkedinUrl) {
      return (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative block h-full cursor-pointer ${extraClass}`}
          aria-label={`${name} — LinkedIn`}
        >
          {children}
          <LinkedInBadge />
        </a>
      );
    }
    return <div className={`group relative h-full ${extraClass}`}>{children}</div>;
  };

  // Advisory / intern variant — small circular card
  if (variant === "intern" || variant === "advisory") {
    return wrapWithLink(
      <div className="flex flex-col h-[140px] items-center text-center justify-start w-full">
        <div className="transition-transform group-hover:scale-110 mb-3 shrink-0">
          {image ? (
            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden flex-shrink-0">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
          ) : (
            <MemberImage name={name} size="sm" />
          )}
        </div>
        <div className="flex flex-col flex-grow justify-start w-full px-1">
          <h3 className="font-bold text-on-surface text-sm leading-tight mb-1 line-clamp-2">{name}</h3>
          {role && (
            <p className="text-[10px] md:text-xs text-on-surface-variant leading-tight line-clamp-2">{role}</p>
          )}
        </div>
      </div>
    );
  }

  // Board variant — larger card
  return wrapWithLink(
    <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm text-center transition-colors border border-outline-variant/10 group-hover:bg-surface-container-low flex flex-col h-[216px] w-full items-center justify-start">
      <div className="mb-4 transition-transform group-hover:scale-105 duration-200 shrink-0">
        {image ? (
          <div className="w-20 h-20 mx-auto rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden flex-shrink-0">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        ) : (
          <MemberImage name={name} size="lg" />
        )}
      </div>
      <div className="flex flex-col flex-grow justify-start w-full">
        <h3 className="font-bold text-on-surface text-sm mb-1 leading-tight line-clamp-2">{name}</h3>
        {role && (
          <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-2">{role}</p>
        )}
      </div>
    </div>
  );
}
