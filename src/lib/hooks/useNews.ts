import { useState, useEffect, useCallback, useMemo } from "react";
import { NewsResponse, Post, UseNewsReturn } from "../types/news";
import { DEFAULT_POSTS_PER_PAGE } from "../constants/news";
import { useSearchParams } from "next/navigation";
import { fetchWithHeaders } from "../utils/api";
import { ROUTES } from "../constants/routes";

export const useNews = (
  postsPerPage: number = DEFAULT_POSTS_PER_PAGE
): UseNewsReturn => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  const fetchPosts = useCallback(async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      // Get filter from URL if exists
      const filter = searchParams.get("filter");
      const url = filter
        ? `${ROUTES.API.ADMIN.POSTS}?filter=${filter}`
        : ROUTES.API.ADMIN.POSTS;

      const result: NewsResponse = await fetchWithHeaders(url);

      if (result.success) {
        setPosts(result.data);
        setTotalPages(Math.ceil(result.data.length / postsPerPage));
        // Reset to first page when filter changes
        setCurrentPage(1);
      } else {
        setError("Failed to fetch posts");
      }
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch posts");
    } finally {
      setIsLoading(false);
    }
  }, [searchParams, postsPerPage]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const getCurrentPosts = useCallback((): Post[] => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return posts.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, posts, postsPerPage]);

  const handlePageChange = useCallback((pageNumber: number): void => {
    setCurrentPage(pageNumber);
  }, []);

  // Memoize the current posts to prevent unnecessary recalculations
  const currentPosts = useMemo(() => getCurrentPosts(), [getCurrentPosts]);

  // Memoize the returned object to prevent unnecessary re-renders
  const newsUtils = useMemo(
    () => ({
      currentPosts,
      isLoading,
      error,
      totalPages,
      currentPage,
      handlePageChange,
      refetch: fetchPosts,
    }),
    [
      currentPosts,
      isLoading,
      error,
      totalPages,
      currentPage,
      handlePageChange,
      fetchPosts,
    ]
  );

  return newsUtils;
};
