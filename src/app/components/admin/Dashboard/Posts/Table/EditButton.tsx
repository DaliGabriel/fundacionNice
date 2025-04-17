import { EditButtonProps } from "../../../../../../lib/types/post";

const EditButton = ({ post, onEdit }: EditButtonProps) => {
  return (
    <button
      onClick={() => onEdit(post)}
      className="text-indigo-600 hover:text-indigo-900 mr-4 cursor-pointer"
    >
      Edit
    </button>
  );
};

export default EditButton;
