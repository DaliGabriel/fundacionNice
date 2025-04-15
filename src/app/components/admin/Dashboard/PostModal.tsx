import { PostModalProps } from "../../../../lib/types/modal";
import { Modal } from "../Modal";
import { PostForm } from "../PostForm/PostForm";

export const PostModal = ({
  isOpen,
  editingPost,
  onClose,
  onSubmit,
}: PostModalProps) => {
  if (!isOpen) return null;

  return (
    <Modal.Layout>
      <Modal.Header>
        <Modal.Title>
          {editingPost ? "Edit Post" : "Create New Post"}
        </Modal.Title>
        <Modal.CloseButton onClose={onClose} />
      </Modal.Header>
      <PostForm
        onSubmit={onSubmit}
        initialData={editingPost || undefined}
        onClose={onClose}
      />
    </Modal.Layout>
  );
};
