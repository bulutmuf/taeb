export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  social: {
    linkedin: string;
    instagram: string;
    twitter: string;
  };
}

export const contactInfo: ContactInfo = {
  phone: "+1 (908) 313-8133",
  email: "contact@taeb.us",
  address: "4383 Route 27 Princeton, NJ, USA",
  social: {
    linkedin: "https://www.linkedin.com/company/turkish-american-pharmacists-association-taeb/",
    instagram: "https://www.instagram.com/taeb.usa",
    twitter: "https://www.twitter.com/taeb_official"
  }
};
