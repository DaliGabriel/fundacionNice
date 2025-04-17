import { Post } from "./post";

export interface TableProps {
  posts: Post[];
  onEdit: (post: Post) => void;
  onDelete: (post: Post) => void;
}

export interface RowProps {
  post: Post;
  children?: React.ReactNode;
}
