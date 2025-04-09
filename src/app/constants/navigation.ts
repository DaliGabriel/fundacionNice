import { NavigationItem } from "../types/navigation";

export const navigationItems: readonly NavigationItem[] = [
  {
    title: "QUIENES SOMOS",
    href: "/",
  },
  {
    title: "NUESTRAS ALIANZAS",
    href: "/nuestras-alianzas",
  },
  {
    title: "NOTICIAS",
    href: "/noticias",
  },
  {
    title: "CONTACTO",
    href: "/contacto",
  },
] as const;
