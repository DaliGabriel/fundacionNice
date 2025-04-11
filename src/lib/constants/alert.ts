import { AlertState } from "../types/alert";

export const initialAlertState: AlertState = {
  isOpen: false,
  title: "",
  message: "",
  type: "success",
};
