import { Post } from "../../types/post";
import { PostFormData } from "../../types/postForm";

const BASE_URL = "/api/admin/posts";

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error("Failed to fetch posts");
  const data = await response.json();
  return data.data;
};

export const createPost = async (formData: PostFormData): Promise<void> => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Failed to create post");
  }
};

export const updatePost = async (post: Post): Promise<void> => {
  const response = await fetch(`${BASE_URL}/${post.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  if (!response.ok) {
    throw new Error("Failed to update post");
  }
};

export const deletePost = async (postId: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/${postId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete post");
  }
};

export const fetchPostById = async (id: string): Promise<Post> => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) throw new Error("Failed to fetch post");
  const data = await response.json();
  return data.data;
};
