import { ReactNode } from "react";

export interface ContentLayoutProps {
  children: ReactNode;
  className?: string;
  centered?: boolean;
  paddingTop?: string;
  paddingBottom?: string;
}
