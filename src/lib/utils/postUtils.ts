import { Post } from "../types/post";
import { PostFormData } from "../types/postForm";

export const convertPostToFormData = (
  post: Post
): PostFormData & { createdAt: string; updatedAt: string } => ({
  id: post.id,
  title: post.title,
  cover: post.cover,
  category: post.category,
  paragraph1: post.paragraph1,
  image1: post.image1 || "",
  image2: post.image2 || "",
  paragraph2: post.paragraph2 || "",
  image3: post.image3 || "",
  image4: post.image4 || "",
  buttonLink: post.buttonLink || "",
  published: post.published,
  createdAt: post.createdAt,
  updatedAt: post.updatedAt,
});
