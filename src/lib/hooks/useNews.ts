import { useState, useEffect, useCallback, useMemo } from "react";
import { NewsResponse, Post, UseNewsReturn } from "../types/news";
import { DEFAULT_POSTS_PER_PAGE } from "../constants/news";
import { useSearchParams } from "next/navigation";

export const useNews = (
  postsPerPage: number = DEFAULT_POSTS_PER_PAGE
): UseNewsReturn => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  const fetchPosts = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      // Get filter from URL if exists
      const filter = searchParams.get("filter");
      const url = filter
        ? `/api/admin/posts?filter=${filter}`
        : "/api/admin/posts";

      const response = await fetch(url);
      const result: NewsResponse = await response.json();

      if (result.success) {
        setPosts(result.data);
        setTotalPages(Math.ceil(result.data.length / postsPerPage));
        // Reset to first page when filter changes
        setCurrentPage(1);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
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
      loading,
      totalPages,
      currentPage,
      handlePageChange,
    }),
    [currentPosts, loading, totalPages, currentPage, handlePageChange]
  );

  return newsUtils;
};
