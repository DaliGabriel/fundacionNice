import { useState, useCallback } from "react";
import { Post } from "../types/post";
import { PostFormData } from "../types/postForm";
import {
  fetchPosts as fetchPostsService,
  createPost as createPostService,
  updatePost as updatePostService,
  deletePost as deletePostService,
  fetchPostById as fetchPostByIdService,
} from "../services/client/posts";
import { ContentState } from "../constants/dashboardState";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPost, setCurrentPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPosts = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetchPostsService();
      setPosts(data);
      setError("");
    } catch (err) {
      setError("Failed to load posts");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createPost = useCallback(
    async (formData: PostFormData) => {
      try {
        await createPostService(formData);
        await fetchPosts();
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    [fetchPosts]
  );

  const updatePost = useCallback(
    async (post: Post) => {
      try {
        await updatePostService(post);
        await fetchPosts();
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    [fetchPosts]
  );

  const deletePost = useCallback(
    async (post: Post) => {
      try {
        await deletePostService(post.id.toString());
        await fetchPosts();
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    [fetchPosts]
  );

  const fetchPostById = useCallback(async (id: string) => {
    try {
      setIsLoading(true);
      const data = await fetchPostByIdService(id);
      setCurrentPost(data);
      setError("");
      return data;
    } catch (err) {
      setError("Failed to load post");
      console.error(err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getContentState = useCallback((): ContentState => {
    if (isLoading) return ContentState.LOADING;
    if (error) return ContentState.ERROR;
    if (posts.length === 0) return ContentState.EMPTY;
    return ContentState.SUCCESS;
  }, [isLoading, error, posts.length]);

  return {
    posts,
    currentPost,
    isLoading,
    error,
    fetchPosts,
    fetchPostById,
    createPost,
    updatePost,
    deletePost,
    getContentState,
  };
};
