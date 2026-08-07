export interface NavItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
}

export interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterGroup {
  title: string;
  links: FooterLink[];
}
