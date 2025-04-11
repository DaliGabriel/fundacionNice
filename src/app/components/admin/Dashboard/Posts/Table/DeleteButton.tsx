import { Post } from "../../../../../../lib/types/post";

interface DeleteButtonProps {
  post: Post;
  onDelete: (post: Post) => void;
}

const DeleteButton = ({ post, onDelete }: DeleteButtonProps) => {
  return (
    <button
      onClick={() => onDelete(post)}
      className="text-red-600 hover:text-red-900 cursor-pointer"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
