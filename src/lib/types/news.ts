export interface Post {
  id: number;
  title: string;
  cover: string;
  updatedAt: string;
}

export interface NewsResponse {
  success: boolean;
  data: Post[];
}

export interface UseNewsReturn {
  currentPosts: Post[];
  loading: boolean;
  totalPages: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
}

export interface NewsCardProps {
  title: string;
  date: string;
  image: string;
  id: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface NewsContentProps {
  posts: Post[];
  loading: boolean;
}

export interface NewsPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  loading: boolean;
}
