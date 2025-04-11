interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow mt-8">
      <table className="min-w-full divide-y divide-gray-200">{children}</table>
    </div>
  );
};

export default Layout;
