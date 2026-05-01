/**
 * Converts a member's display name to a URL-safe slug.
 * Turkish characters are transliterated to their ASCII equivalents.
 *
 * Example: "Mustafa Abacıoğlu" → "mustafa-abacioglu"
 */
export function toMemberSlug(name: string): string {
  const trMap: Record<string, string> = {
    ğ: "g", Ğ: "g",
    ü: "u", Ü: "u",
    ş: "s", Ş: "s",
    ı: "i", İ: "i",
    ö: "o", Ö: "o",
    ç: "c", Ç: "c",
  };

  return name
    .split("")
    .map((c) => trMap[c] ?? c)
    .join("")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Ordered list of formats to try, from most preferred to least. */
const IMAGE_FORMATS = ["webp", "jpg", "jpeg", "png"] as const;

/**
 * Returns an ordered array of candidate image URLs for a given member name.
 * The caller should try each URL in sequence and stop at the first that loads.
 *
 * Example for "İsa Bodur": [
 *   "/images/members/isa-bodur.webp",
 *   "/images/members/isa-bodur.jpg",
 *   "/images/members/isa-bodur.jpeg",
 *   "/images/members/isa-bodur.png",
 * ]
 */
export function getMemberImageCandidates(name: string): string[] {
  const slug = toMemberSlug(name);
  return IMAGE_FORMATS.map((ext) => `/images/members/${slug}.${ext}`);
}
