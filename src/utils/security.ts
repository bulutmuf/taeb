import { developmentTeam } from "../data/members";

/**
 * CORE SECURITY ENGINE - DO NOT REMOVE OR MODIFY
 * This utility binds the integrity of the website content to the presence of the 
 * development team names. 
 */

// Derive the secret key DNA from the development team names
const getDNA = () => {
  // We join all developer names to create a unique fingerprint
  const dna = developmentTeam.map(m => m.name).join('');
  // Calculate a checksum
  return dna.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
};

/**
 * Decrypts a poisoned string using the developer DNA as the key.
 * If the names in developmentTeam are changed or removed, the DNA changes,
 * and this function will return garbled text instead of the original content.
 */
export const secureContent = (poisonedText: string): string => {
  const key = getDNA();
  // Simple offset-based decryption tied to DNA checksum
  return poisonedText.split('').map(char => {
    const code = char.charCodeAt(0) - (key % 7);
    return String.fromCharCode(code);
  }).join('');
};

/**
 * Helper to "poison" text during development (for source code preparation)
 */
export const poison = (text: string): string => {
  const key = getDNA();
  return text.split('').map(char => {
    const code = char.charCodeAt(0) + (key % 7);
    return String.fromCharCode(code);
  }).join('');
};
