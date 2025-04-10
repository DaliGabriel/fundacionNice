"use client";

import { PostForm } from "@/app/components/admin/PostForm/PostForm";
import { PostFormData } from "../../../lib/types/postForm";

export default function AdminDashboard() {
  const handleSubmit = async (formData: PostFormData) => {
    try {
      const response = await fetch("/api/admin/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      alert("Post created successfully!");
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard - Create Post</h1>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
}
