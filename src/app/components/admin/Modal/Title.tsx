import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return <h2 className="text-xl font-bold">{children}</h2>;
};

export default Title;
