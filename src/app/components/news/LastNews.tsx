import useLastNews from "@/lib/hooks/useLastNews";
import { LoadingSpinner } from "../common/LoadingSpinner";
import NewsCard from "./NewsCard";

const LastNews = () => {
  const { posts, isLoading } = useLastNews();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Últimas Noticias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <NewsCard
            key={post.id}
            id={String(post.id)}
            title={post.title}
            date={post.createdAt}
            image={post.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default LastNews;
