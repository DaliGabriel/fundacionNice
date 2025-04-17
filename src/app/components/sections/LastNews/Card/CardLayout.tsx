import { CardLayoutProps } from "../../../../../lib/types/card";

const CardLayout = ({ children }: CardLayoutProps) => {
  return (
    <div className="bg-[#e6e6e6] dark:bg-[#1a1a1a] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
      {children}
    </div>
  );
};

export default CardLayout;
