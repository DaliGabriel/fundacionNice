/**
 * A form component for creating and editing blog posts.
 * This component handles the submission and validation of post data.
 *
 * @module PostForm
 */

import { PostFormProps } from "../../../../lib/types/postForm";
import { usePostForm } from "../../../../lib/hooks/usePostForm";
import { PostFormFields } from "./PostFormFields";
import ErrorAlert from "../ErrorAlert";
import SubmitButton from "./SubmitButton";

/**
 * PostForm component for managing blog post data.
 *
 * @param {PostFormProps} props - The component props
 * @param {Function} props.onSubmit - Callback function when form is submitted
 * @param {PostFormData} [props.initialData] - Initial data for editing an existing post
 * @param {Function} [props.onClose] - Callback function when form is closed
 *
 * @returns {JSX.Element} A form for creating or editing blog posts
 *
 * @description
 * This component:
 * 1. Manages form state and validation
 * 2. Handles form submission and error states
 * 3. Provides a user interface for post creation and editing
 * 4. Supports both create and edit modes
 *
 * @example
 * // Creating a new post
 * <PostForm
 *   onSubmit={(data) => handleCreatePost(data)}
 *   onClose={() => setShowForm(false)}
 * />
 *
 * @example
 * // Editing an existing post
 * <PostForm
 *   initialData={existingPost}
 *   onSubmit={(data) => handleUpdatePost(data)}
 *   onClose={() => setShowForm(false)}
 * />
 */
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
