import { ReactNode } from "react";

export interface SubmitButtonProps {
  isLoading?: boolean;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface HeaderProps {
  children: ReactNode;
}

export interface FormFieldsProps {
  username: string;
  password: string;
  onUsernameChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
}

export interface FormProps {
  children: ReactNode;
  onSubmit: (e: React.FormEvent) => Promise<void>;
}

export interface ErrorMessageProps {
  message: string;
}
