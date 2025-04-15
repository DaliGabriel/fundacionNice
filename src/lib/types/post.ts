import { ContentState } from "../constants/dashboardState";
import { PostFormData } from "./postForm";

export interface Post {
  id: number;
  title: string;
  cover: string;
  category: string;
  paragraph1: string;
  image1?: string;
  image2?: string;
  paragraph2?: string;
  image3?: string;
  image4?: string;
  buttonLink?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TableProps {
  posts: Post[];
  onEdit: (post: Post) => void;
  onDelete: (post: Post) => void;
}

export interface PostsContentProps {
  state: ContentState;
  posts: Post[];
  error?: string;
  onEdit: (post: Post) => void;
  onDelete: (post: Post) => void;
}

export type EditingPost = PostFormData & {
  createdAt: string;
  updatedAt: string;
};

export interface PostCardProps {
  post: Post;
}

export interface LoadingStateProps {
  title: string;
}
