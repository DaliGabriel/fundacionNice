/**
 * Custom hook for managing post form state and submission.
 * Provides form state management, validation, and submission handling for post creation/editing.
 *
 * @module usePostForm
 */

import { useState, useCallback, useMemo } from "react";
import { PostFormData, PostFormProps } from "../types/postForm";
import { defaultFields } from "../constants/usePostForm";

/**
 * Hook for managing post form state and submission
 *
 * @param {PostFormProps} props - Configuration for the form
 * @param {Function} props.onSubmit - Callback function to handle form submission
 * @param {PostFormData} [props.initialData] - Initial form data for editing existing posts
 * @param {Function} props.onClose - Callback function to handle form closing
 *
 * @returns {Object} Form management utilities
 * @returns {PostFormData} formData - Current form state
 * @returns {boolean} isLoading - Loading state during submission
 * @returns {string} error - Error message if submission fails
 * @returns {Function} handleSubmit - Function to handle form submission
 * @returns {Function} handleChange - Function to handle input changes
 * @returns {Function} handleClose - Function to handle form closing
 *
 * @example
 * const { formData, handleSubmit, handleChange } = usePostForm({
 *   onSubmit: async (data) => {
 *     // Handle form submission
 *   },
 *   onClose: () => {
 *     // Handle form closing
 *   }
 * });
 */
export const usePostForm = ({
  onSubmit,
  initialData,
  onClose,
}: PostFormProps) => {
  const [formData, setFormData] = useState<PostFormData>(
    initialData || defaultFields
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const resetForm = useCallback(() => {
    setFormData(defaultFields);
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
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
    },
    [formData, initialData, onSubmit, resetForm]
  );

  const handleChange = useCallback(
    (
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
    },
    []
  );

  const handleClose = useCallback(() => {
    onClose();
    resetForm();
  }, [onClose, resetForm]);

  // Memoize the returned object to prevent unnecessary re-renders
  const formUtils = useMemo(
    () => ({
      formData,
      isLoading,
      error,
      handleSubmit,
      handleChange,
      handleClose,
    }),
    [formData, isLoading, error, handleSubmit, handleChange, handleClose]
  );

  return formUtils;
};
