import { PostFormProps } from "../../../../lib/types/postForm";
import { usePostForm } from "../../../../lib/hooks/usePostForm";
import { PostFormFields } from "./PostFormFields";
import ErrorAlert from "../ErrorAlert";
import SubmitButton from "./SubmitButton";

export const PostForm = ({ onSubmit, initialData, onClose }: PostFormProps) => {
  const {
    formData,
    isLoading,
    error,
    handleSubmit,
    handleChange,
    handleClose,
  } = usePostForm({
    onSubmit,
    initialData,
    onClose,
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <ErrorAlert error={error} />}
      <PostFormFields formData={formData} handleChange={handleChange} />
      <div className="flex justify-between items-center gap-4 mt-6">
        <SubmitButton isLoading={isLoading} initialData={initialData} />
        <button
          type="button"
          onClick={handleClose}
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
