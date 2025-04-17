import { TitleProps } from "../../../../../lib/types/dashboard";

export const Title = ({ children }: TitleProps) => {
  return <h1 className="text-2xl font-bold">{children}</h1>;
};
