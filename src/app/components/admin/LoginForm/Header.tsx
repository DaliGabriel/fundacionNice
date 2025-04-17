import { HeaderProps } from "../../../../lib/types/loginForm";

export const Header = ({ children }: HeaderProps) => {
  return (
    <div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {children}
      </h2>
    </div>
  );
};
