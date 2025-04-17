import { NotFoundProps } from "../../../lib/types/common";

export const NotFound = ({
  message = "Not found",
  className = "text-gray-500",
}: NotFoundProps) => {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center">
      <div className={className}>{message}</div>
    </div>
  );
};
