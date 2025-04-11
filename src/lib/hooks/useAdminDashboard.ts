import { useState } from "react";
import { EditingPost, Post } from "../types/post";
import { PostFormData } from "../types/postForm";
import { usePosts } from "./usePosts";
import { convertPostToFormData } from "../utils/postUtils";
import { initialAlertState } from "../constants/alert";
import { AlertState } from "../types/alert";

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

  const showAlert = (state: Partial<AlertState>) => {
    setAlertState({ ...initialAlertState, ...state, isOpen: true });
  };

  const closeAlert = () => {
    setAlertState(initialAlertState);
  };

  const handleSubmit = async (formData: PostFormData) => {
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
  };

  const handleEdit = async (post: Post) => {
    setEditingPost(convertPostToFormData(post));
    setIsModalOpen(true);
  };

  const handleDelete = async (post: Post) => {
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
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingPost(null);
  };

  const openCreateModal = () => {
    setIsModalOpen(true);
  };

  return {
    isModalOpen,
    editingPost,
    posts,
    error,
    alertState,
    closeAlert,
    contentState: getContentState(),
    handleSubmit,
    handleEdit,
    handleDelete,
    handleCloseModal,
    openCreateModal,
    fetchPosts,
  };
};
