import { AlertType } from "../types/alert";

export const useAlert = () => {
  const getIcon = (type: AlertType = "success"): string => {
    switch (type) {
      case "success":
        return "✓";
      case "error":
        return "✕";
      case "confirm":
        return "?";
      default:
        return "";
    }
  };

  const getColorClass = (type: AlertType = "success"): string => {
    switch (type) {
      case "success":
        return "text-green-600";
      case "error":
        return "text-red-600";
      case "confirm":
        return "text-blue-600";
      default:
        return "";
    }
  };

  return {
    getIcon,
    getColorClass,
  };
};
