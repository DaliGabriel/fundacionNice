import { FormProps } from "../../../../lib/types/loginForm";

export const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
      {children}
    </form>
  );
};
