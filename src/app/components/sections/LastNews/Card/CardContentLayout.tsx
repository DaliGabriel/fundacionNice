import { CardContentLayoutProps } from "../../../../../lib/types/card";

const CardContentLayout = ({ children }: CardContentLayoutProps) => {
  return <div className="p-6">{children}</div>;
};

export default CardContentLayout;
