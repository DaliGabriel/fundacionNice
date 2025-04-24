import { useEffect, useState } from "react";
import { Post } from "../types/post";
import { fetchWithHeaders } from "../utils/api";
import { ROUTES } from "../constants/routes";

interface UseLastNewsReturn {
  posts: Post[];
  isLoading: boolean;
  error: string | null;
}

const useLastNews = (): UseLastNewsReturn => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await fetchWithHeaders(ROUTES.API.LAST_NEWS);
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch posts");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, isLoading, error };
};

export default useLastNews;
