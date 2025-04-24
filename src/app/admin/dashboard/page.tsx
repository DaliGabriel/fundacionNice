"use client";

import { useEffect } from "react";
import { Header } from "../../components/admin/Dashboard/Header";
import { PostsContent } from "../../components/admin/Dashboard/Posts/PostsContent";
import { PostModal } from "../../components/admin/Dashboard/PostModal";
import { useAdminDashboard } from "../../../lib/hooks/useAdminDashboard";

export default function AdminDashboard() {
  const {
    isModalOpen,
    editingPost,
    posts,
    error,
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
    <div className="max-w-7xl mx-auto">
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
    </div>
  );
}
