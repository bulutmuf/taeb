export interface Project {
  id: string;
  titleKey: string;
  tagKey: string;
  descKey: string;
  icon: string;
  image: string;
  ctaKey: string;
  span: "large" | "medium";
  href?: string;
  external?: boolean;
}

export const projects: Project[] = [
  {
    id: "persovit",
    titleKey: "persovit",
    tagKey: "persovitTag",
    descKey: "persovitDesc",
    icon: "medication",
    image: "/images/projects/persovit-lineup.jpeg",
    ctaKey: "contactUs",
    span: "large",
    href: "/contact",
  },
  {
    id: "smart-box",
    titleKey: "smartBox",
    tagKey: "smartBoxTag",
    descKey: "smartBoxDesc",
    icon: "devices",
    image: "/images/projects/smart-box.png",
    ctaKey: "contactUs",
    span: "medium",
    href: "/contact",
  },
];
