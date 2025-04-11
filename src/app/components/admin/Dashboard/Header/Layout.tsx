import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-between items-center mb-6">{children}</div>
  );
};

export default Layout;
