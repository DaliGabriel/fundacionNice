import { useState } from "react";
import { PostFormData, PostFormProps } from "../types/postForm";
import { defaultFields } from "../constants/usePostForm";

export const usePostForm = ({ onSubmit, initialData }: PostFormProps) => {
  const [formData, setFormData] = useState<PostFormData>(
    initialData || defaultFields
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await onSubmit(formData);
      if (!initialData) {
        resetForm();
      }
    } catch (err) {
      console.error(err);
      setError("Failed to submit form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const resetForm = () => {
    setFormData(defaultFields);
  };

  return {
    formData,
    isLoading,
    error,
    handleSubmit,
    handleChange,
  };
};
