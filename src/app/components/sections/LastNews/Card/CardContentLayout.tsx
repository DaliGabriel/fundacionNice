interface CardContentLayoutProps {
  children: React.ReactNode;
}

const CardContentLayout = ({ children }: CardContentLayoutProps) => {
  return <div className="p-6">{children}</div>;
};

export default CardContentLayout;
