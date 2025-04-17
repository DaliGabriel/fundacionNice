export interface TitleProps {
  title: string;
  className?: string;
}

export interface NotFoundProps {
  message?: string;
  className?: string;
}

export interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

export interface ErrorMessageProps {
  message: string;
  className?: string;
}
