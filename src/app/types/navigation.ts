export interface NavigationItem {
  title: string;
  href: string;
}

export interface MobileButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export interface MobileNavigationProps {
  toggleMenu: () => void;
}

export interface NavigationProps {
  items: readonly NavigationItem[];
}
