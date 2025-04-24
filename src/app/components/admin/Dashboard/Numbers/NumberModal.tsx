import { NumberModalProps } from "@/lib/types/modal";
import { Modal } from "../../Modal";
import { NumberForm } from "./NumberForm";

export const NumberModal = ({
  isOpen,
  editingNumber,
  onClose,
  onSubmit,
}: NumberModalProps) => {
  if (!isOpen) return null;

  return (
    <Modal.Layout>
      <Modal.Header>
        <Modal.Title>
          {editingNumber ? "Edit Number" : "Add Number"}
        </Modal.Title>
        <Modal.CloseButton onClose={onClose} />
      </Modal.Header>
      <NumberForm
        onSubmit={onSubmit}
        initialData={editingNumber || undefined}
        onClose={onClose}
      />
    </Modal.Layout>
  );
};
