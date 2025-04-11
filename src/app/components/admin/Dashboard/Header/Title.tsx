import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return <h1 className="text-2xl font-bold">{children}</h1>;
};
