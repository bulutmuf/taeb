export interface Project {
  id: string;
  titleKey: string;
  tagKey: string;
  descKey: string;
  icon: string;
  image: string;
  ctaKey: string;
  span: "large" | "medium" | "split";
}

export const projects: Project[] = [
  {
    id: "flying-pharmacists",
    titleKey: "flyingPharmacists",
    tagKey: "flyingPharmacistsTag",
    descKey: "flyingPharmacistsDesc",
    icon: "flight_takeoff",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvsmCrzy5NhWdK92gR-8tOpAgMugOaxNBnHpWCn0Dzbsl3YfGWk2P9B0RqVVyu21UrLVnNJW3B1bCgLsvj2RvjoZy_oB37fnovhs34brU3iF-fRW0rwq_WPES0EALSvtRUAzdlGU4M2S643tZRjgssMLjA65vKgSHIUyy_-ReAeOptfabNxlPY5wvOxs9VvLgbUG_SYnYY_QvRXyPg7VC-yOCLjhufT-zFAEiTQ39LEpj_rH66UOVwS0pmuEwvgZxCwg6KxzA_-U8",
    ctaKey: "projectDetails",
    span: "large",
  },
  {
    id: "ecology-101",
    titleKey: "ecology101",
    tagKey: "ecology101Tag",
    descKey: "ecology101Desc",
    icon: "eco",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTuk4iRYm9wzZ3qVoroJkG4vsuGsyGVjMcWbcGUN3MUEp6XWp_anOyhVWDLggtfxuznkswzTNhZ0xCIrVbV7F9ZG1fxXkMLxsxcqneYob0R9eo_sNFMSmzX7UW6mA9_YXdLPH4ceFkQXn1P9qebtqWyfvb9wreL3JjuOzzoPU-Ui2KPl0sbkIhod9RjRSHT9rOtsNUfXDcjVeJa1niQqo43-3PzJCIDaeNNsJwMvppgCbeyIjzrb_LCWizANW_gJh7a-oFa7Pc6Kw",
    ctaKey: "discover",
    span: "medium",
  },
  {
    id: "nyc-spirit",
    titleKey: "nycSpirit",
    tagKey: "nycSpiritTag",
    descKey: "nycSpiritDesc",
    icon: "location_city",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7_LLXoef-uoUnvcKpsRfsnhkmfD7F7Md5yzVpO1a7EvaIABpYltgEVJgj4-NkOX8VHUMBuV63z8AYWyBmiaDofAKeiR-F8beBDYfYrHp-DhEnIpmefmIyw9J6PIoIjDl5v5FypZ8HaB41WPfQmXiF_aqrHU1aAg-4YI3BngPCJvudVYidK3zWfFOXGa3TNTWogBbhZfUy54minGMuOCg6iE3wrnv3-8MuRU0LyazURq2THOEtlQn5LryBnJCrwG_dehXMfNW5BaU",
    ctaKey: "participationTerms",
    span: "medium",
  },
  {
    id: "american-dream",
    titleKey: "americanDream",
    tagKey: "americanDreamTag",
    descKey: "americanDreamDesc",
    icon: "school",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBr5jV6b99OwukzskPU7Ve49-3etf3WqQ6JL3lwPd0cHLIV2Jn1ZJCehX6agocQa4sFwCetoYW6d8G5YzJ5z5qCr3E_51aWaVl2j2gWfvXtoa-tOi_mxazEUnBeqnZLMaOhbZe9xpXohsG3whT_pgzeGs6B0k-fyVx9kYfciC8OcjzKIJAMceiMTQuCeE48cpWlFybL_o0-TruhPOfxaiYXdIi5BnxkN7blv0PvdGEONQG7_MxY-vUkngy7vBNoXm_komsXV6Ff-rI",
    ctaKey: "applicationProcess",
    span: "split",
  },
];
