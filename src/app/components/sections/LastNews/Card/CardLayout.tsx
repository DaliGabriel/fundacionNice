interface CardLayoutProps {
  children: React.ReactNode;
}

const CardLayout = ({ children }: CardLayoutProps) => {
  return (
    <div className="bg-[#e6e6e6] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
      {children}
    </div>
  );
};

export default CardLayout;
