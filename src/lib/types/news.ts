export interface Post {
  id: string;
  title: string;
  content: string;
  cover: string;
  createdAt: string;
  updatedAt: string;
}

export interface NewsResponse {
  success: boolean;
  data: Post[];
}

export interface UseNewsReturn {
  currentPosts: Post[];
  isLoading: boolean;
  error: string | null;
  totalPages: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
  refetch: () => Promise<void>;
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
