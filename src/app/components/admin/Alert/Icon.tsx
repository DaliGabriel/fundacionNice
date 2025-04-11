import { AlertType } from "../../../../lib/types/alert";
import { useAlert } from "../../../../lib/hooks/useAlert";

interface IconProps {
  type: AlertType;
}

export const Icon = ({ type }: IconProps) => {
  const { getIcon, getColorClass } = useAlert();

  return (
    <div className="flex items-center justify-center mb-4">
      <div className={`text-4xl ${getColorClass(type)}`}>{getIcon(type)}</div>
    </div>
  );
};
