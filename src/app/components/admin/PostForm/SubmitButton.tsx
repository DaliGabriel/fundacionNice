import { SubmitButtonProps } from "../../../../lib/types/postForm";

const SubmitButton = ({ isLoading, initialData }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
    >
      {isLoading
        ? "Submitting..."
        : initialData
        ? "Update Post"
        : "Create Post"}
    </button>
  );
};

export default SubmitButton;
