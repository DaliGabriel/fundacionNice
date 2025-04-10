export interface LogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface NavigationItem {
  href: string;
  label: string;
}

export interface NavigationProps {
  items: NavigationItem[];
}

export interface SocialMediaProps {
  title: string;
  socialLinks: {
    instagram: string;
    facebook: string;
  };
}

export interface CopyrightProps {
  text: string;
  privacyLink: {
    href: string;
    label: string;
  };
}
