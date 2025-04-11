import { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  onSubmit: (e: React.FormEvent) => Promise<void>;
}

export const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
      {children}
    </form>
  );
};
