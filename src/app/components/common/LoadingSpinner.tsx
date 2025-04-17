import { LoadingSpinnerProps } from "../../../lib/types/common";

export const LoadingSpinner = ({
  size = "md",
  color = "blue-500",
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center">
      <div
        className={`animate-spin rounded-full border-t-2 border-b-2 ${sizeClasses[size]} border-${color}`}
      />
    </div>
  );
};
