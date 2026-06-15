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
    titleKey: "projects.persovit",
    tagKey: "projects.persovitTag",
    descKey: "projects.persovitDesc",
    icon: "medication",
    image: "/images/projects/persovit-lineup.jpeg",
    ctaKey: "projects.contactUs",
    span: "large",
    href: "/contact",
  },
  {
    id: "smart-box",
    titleKey: "projects.smartBox",
    tagKey: "projects.smartBoxTag",
    descKey: "projects.smartBoxDesc",
    icon: "devices",
    image: "/images/projects/smart-box.png",
    ctaKey: "projects.contactUs",
    span: "medium",
    href: "/contact",
  },
];
