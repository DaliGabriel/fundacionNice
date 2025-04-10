import { PostFormProps } from "../../../../lib/types/postForm";
import { usePostForm } from "../../../../lib/hooks/usePostForm";
import { PostFormFields } from "./PostFormFields";
import ErrorAlert from "../common/ErrorAlert";
import SubmitButton from "./SubmitButton";

export const PostForm = ({ onSubmit, initialData }: PostFormProps) => {
  const { formData, isLoading, error, handleSubmit, handleChange } =
    usePostForm({
      onSubmit,
      initialData,
    });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <ErrorAlert error={error} />}
      <PostFormFields formData={formData} handleChange={handleChange} />
      <SubmitButton isLoading={isLoading} initialData={initialData} />
    </form>
  );
};
