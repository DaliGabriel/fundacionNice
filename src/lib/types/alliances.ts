export interface Alliance {
  name: string;
  logo: string;
  logoWithColor: string;
}

export interface AllianceSectionProps {
  title: string;
  description: string;
  image: string;
  logo: string;
  filter: string;
  isReversed?: boolean;
}

export interface AllianceCardProps {
  title: string;
  description: string;
  logo: string;
  bgColor?: string;
  textColor?: string;
  filter: string;
}
