import { ReactNode } from "react";

export interface TitleProps {
  children: ReactNode;
}

export interface ButtonProps {
  setIsModalOpen: (isModalOpen: boolean) => void;
}
