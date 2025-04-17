import { ErrorMessageProps } from "../../../lib/types/common";

export const ErrorMessage = ({
  message,
  className = "text-red-500",
}: ErrorMessageProps) => {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center">
      <div className={className}>{message}</div>
    </div>
  );
};
