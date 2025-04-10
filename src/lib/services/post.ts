import { PostFormData } from "../types/postForm";
import { validatePostData } from "../utils/postValidator";
import {
  create,
  update,
  remove,
  findById,
  findAll,
} from "../database/repositories/post";

export const createPost = async (postData: PostFormData) => {
  const validatedPostData = validatePostData(postData);
  return await create(validatedPostData);
};

export const updatePost = async (id: string, postData: PostFormData) => {
  const existingPost = await findById(parseInt(id));
  if (!existingPost) {
    throw new Error("Post not found");
  }
  const validatedPostData = validatePostData(postData);
  return await update(parseInt(id), validatedPostData);
};

export const deletePost = async (id: string) => {
  const existingPost = await findById(parseInt(id));
  if (!existingPost) {
    throw new Error("Post not found");
  }
  return await remove(parseInt(id));
};

export const getPostById = async (id: string) => {
  return await findById(parseInt(id));
};

export const getAllPosts = async () => {
  return await findAll();
};
