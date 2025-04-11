export type AlertType = "success" | "error" | "confirm";

export interface AlertState {
  isOpen: boolean;
  title: string;
  message: string;
  type: "success" | "error" | "confirm";
  onConfirm?: () => void;
}

export interface AlertProps {
  isOpen: boolean;
  type: AlertType;
  title: string;
  message: string;
  onClose: () => void;
  onConfirm?: () => void;
}
