interface CardLayoutProps {
  children: React.ReactNode;
}

const CardLayout = ({ children }: CardLayoutProps) => {
  return (
    <div className="bg-[#e6e6e6] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {children}
    </div>
  );
};

export default CardLayout;
