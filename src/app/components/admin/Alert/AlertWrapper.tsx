"use client";

import { useAlertContext } from "@/lib/context/AlertContext";
import { AlertComponent } from "./Alert";

export const AlertWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { alertState, closeAlert } = useAlertContext();

  return (
    <>
      {children}
      <AlertComponent
        isOpen={alertState.isOpen}
        type={alertState.type}
        title={alertState.title}
        message={alertState.message}
        onClose={closeAlert}
        onConfirm={alertState.onConfirm}
      />
    </>
  );
};
