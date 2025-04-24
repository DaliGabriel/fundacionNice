"use client";

import { AlertProps } from "../../../../lib/types/alert";
import { Alert } from "./index";

export const AlertComponent = ({
  isOpen,
  type,
  title,
  message,
  onClose,
  onConfirm,
}: AlertProps) => {
  if (!isOpen) return null;

  return (
    <Alert.Layout>
      <Alert.Icon type={type} />
      <Alert.Content title={title} message={message} />
      <Alert.Actions type={type} onClose={onClose} onConfirm={onConfirm} />
    </Alert.Layout>
  );
};
