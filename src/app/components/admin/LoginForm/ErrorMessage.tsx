import { ErrorMessageProps } from "../../../../lib/types/loginForm";

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (!message) return null;

  return <div className="text-red-500 text-center">{message}</div>;
};
