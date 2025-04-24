import { Post } from "../../types/post";
import { PostFormData } from "../../types/postForm";
import { fetchWithHeaders } from "../../utils/api";
import { ROUTES } from "../../constants/routes";

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetchWithHeaders(ROUTES.API.ADMIN.POSTS);
  return response.data;
};

export const createPost = async (formData: PostFormData): Promise<void> => {
  await fetchWithHeaders(ROUTES.API.ADMIN.POSTS, {
    method: "POST",
    body: JSON.stringify(formData),
  });
};

export const updatePost = async (post: Post): Promise<void> => {
  await fetchWithHeaders(ROUTES.API.ADMIN.POST(post.id), {
    method: "PUT",
    body: JSON.stringify(post),
  });
};

export const deletePost = async (postId: string): Promise<void> => {
  await fetchWithHeaders(ROUTES.API.ADMIN.POST(postId), {
    method: "DELETE",
  });
};

export const fetchPostById = async (id: string): Promise<Post> => {
  const response = await fetchWithHeaders(ROUTES.API.ADMIN.POST(id));
  return response.data;
};
