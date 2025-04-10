import { PostFormData } from "../types/postForm";
import { validateCategory } from "./category";

export const validatePostData = (postData: PostFormData): PostFormData => {
  if (
    !postData.title ||
    !postData.cover ||
    !postData.category ||
    !postData.paragraph1
  ) {
    throw new Error("Missing required fields");
  }

  const validatedCategory = validateCategory(postData.category);

  return {
    ...postData,
    category: validatedCategory,
  };
};
