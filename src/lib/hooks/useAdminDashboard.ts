/**
 * Custom hook for managing the admin dashboard.
 * Provides functionality for managing posts, modals, and alerts in the admin interface.
 *
 * @module useAdminDashboard
 */

import { useState, useCallback, useMemo } from "react";
import { EditingPost, Post } from "../types/post";
import { PostFormData } from "../types/postForm";
import { usePosts } from "./usePosts";
import { convertPostToFormData } from "../utils/postUtils";
import { initialAlertState } from "../constants/alert";
import { AlertState } from "../types/alert";

/**
 * Hook for managing the admin dashboard
 *
 * @returns {Object} Dashboard management utilities
 * @returns {boolean} isModalOpen - State of the post modal
 * @returns {EditingPost | null} editingPost - Currently edited post
 * @returns {Post[]} posts - Array of all posts
 * @returns {string} error - Error message if operation fails
 * @returns {AlertState} alertState - Current alert state
 * @returns {Function} closeAlert - Function to close the current alert
 * @returns {ContentState} contentState - Current content state
 * @returns {Function} handleSubmit - Function to handle post submission
 * @returns {Function} handleEdit - Function to handle post editing
 * @returns {Function} handleDelete - Function to handle post deletion
 * @returns {Function} handleCloseModal - Function to close the post modal
 * @returns {Function} openCreateModal - Function to open the create post modal
 * @returns {Function} fetchPosts - Function to fetch all posts
 *
 * @example
 * const {
 *   posts,
 *   isModalOpen,
 *   handleEdit,
 *   handleDelete,
 *   handleSubmit
 * } = useAdminDashboard();
 *
 * // Edit a post
 * const onEditClick = (post) => {
 *   handleEdit(post);
 * };
 *
 * // Delete a post
 * const onDeleteClick = (post) => {
 *   handleDelete(post);
 * };
 */
export const useAdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<EditingPost | null>(null);
  const [alertState, setAlertState] = useState<AlertState>(initialAlertState);
  const {
    posts,
    error,
    fetchPosts,
    createPost,
    updatePost,
    deletePost,
    getContentState,
  } = usePosts();

  const showAlert = useCallback((state: Partial<AlertState>) => {
    setAlertState({ ...initialAlertState, ...state, isOpen: true });
  }, []);

  const closeAlert = useCallback(() => {
    setAlertState(initialAlertState);
  }, []);

  const handleSubmit = useCallback(
    async (formData: PostFormData) => {
      const success = editingPost
        ? await updatePost({
            ...formData,
            id: editingPost.id!,
            createdAt: editingPost.createdAt,
            updatedAt: editingPost.updatedAt,
          })
        : await createPost(formData);

      if (success) {
        showAlert({
          type: "success",
          title: "Success",
          message: `Post ${editingPost ? "updated" : "created"} successfully!`,
        });
        handleCloseModal();
      } else {
        showAlert({
          type: "error",
          title: "Error",
          message: `Failed to ${editingPost ? "update" : "create"} post`,
        });
      }
    },
    [editingPost, updatePost, createPost, showAlert]
  );

  const handleEdit = useCallback(async (post: Post) => {
    setEditingPost(convertPostToFormData(post));
    setIsModalOpen(true);
  }, []);

  const handleDelete = useCallback(
    async (post: Post) => {
      showAlert({
        type: "confirm",
        title: "Confirm Delete",
        message: "Are you sure you want to delete this post?",
        onConfirm: async () => {
          const success = await deletePost(post);
          if (success) {
            showAlert({
              type: "success",
              title: "Success",
              message: "Post deleted successfully!",
            });
          } else {
            showAlert({
              type: "error",
              title: "Error",
              message: "Failed to delete post",
            });
          }
        },
      });
    },
    [deletePost, showAlert]
  );

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setEditingPost(null);
  }, []);

  const openCreateModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  // Memoize the content state to prevent unnecessary recalculations
  const contentState = useMemo(() => getContentState(), [getContentState]);

  // Memoize the returned object to prevent unnecessary re-renders
  const dashboardUtils = useMemo(
    () => ({
      isModalOpen,
      editingPost,
      posts,
      error,
      alertState,
      closeAlert,
      contentState,
      handleSubmit,
      handleEdit,
      handleDelete,
      handleCloseModal,
      openCreateModal,
      fetchPosts,
    }),
    [
      isModalOpen,
      editingPost,
      posts,
      error,
      alertState,
      closeAlert,
      contentState,
      handleSubmit,
      handleEdit,
      handleDelete,
      handleCloseModal,
      openCreateModal,
      fetchPosts,
    ]
  );

  return dashboardUtils;
};
