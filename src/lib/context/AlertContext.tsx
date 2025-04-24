"use client";
import React, { createContext, useContext } from "react";
import { useAlert } from "../hooks/useAlert";
import { AlertState } from "../types/alert";

interface AlertContextType {
  alertState: AlertState;
  showAlert: (state: Partial<AlertState>) => void;
  closeAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { alertState, showAlert, closeAlert } = useAlert();

  return (
    <AlertContext.Provider value={{ alertState, showAlert, closeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error("useAlertContext must be used within an AlertProvider");
  }
  return context;
};
