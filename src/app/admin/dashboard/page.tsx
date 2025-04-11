"use client";

import { useEffect } from "react";
import { Header } from "../../components/admin/Dashboard/Header";
import { PostsContent } from "../../components/admin/Dashboard/Posts/PostsContent";
import { PostModal } from "../../components/admin/Dashboard/PostModal";
import { AlertComponent } from "../../components/admin/Alert/Alert";
import { useAdminDashboard } from "../../../lib/hooks/useAdminDashboard";

export default function AdminDashboard() {
  const {
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
  } = useAdminDashboard();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Header.Layout>
        <Header.Title>Admin Dashboard</Header.Title>
        <Header.Button setIsModalOpen={openCreateModal} />
      </Header.Layout>

      <PostsContent
        state={contentState}
        posts={posts}
        error={error}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <PostModal
        isOpen={isModalOpen}
        editingPost={editingPost}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />

      <AlertComponent
        isOpen={alertState.isOpen}
        type={alertState.type}
        title={alertState.title}
        message={alertState.message}
        onClose={closeAlert}
        onConfirm={alertState.onConfirm}
      />
    </div>
  );
}
