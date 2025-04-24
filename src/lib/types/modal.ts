import { ReactNode } from "react";
import { PostFormData } from "./postForm";
import { Numbers } from "./numbers";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export interface CloseModalButtonProps {
  onClose: () => void;
}

export interface PostModalProps {
  isOpen: boolean;
  editingPost: (PostFormData & { createdAt: string; updatedAt: string }) | null;
  onClose: () => void;
  onSubmit: (data: PostFormData) => Promise<void>;
}

export interface NumberModalProps {
  isOpen: boolean;
  editingNumber: Numbers | null;
  onClose: () => void;
  onSubmit: (data: Partial<Numbers>) => Promise<void>;
}
