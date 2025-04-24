import { Dispatch, SetStateAction } from "react";

export interface NavbarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
