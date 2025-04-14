import { ReactNode } from "react";

export interface ContentLayoutProps {
  children: ReactNode;
  className?: string;
  withPadding?: boolean;
  centered?: boolean;
}
