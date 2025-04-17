import NewsCard from "./NewsCard";
import { LoadingSkeleton } from "./LoadingSkeleton";
import { NewsContentProps } from '../../../lib/types/news';

export const NewsContent = ({ posts, loading }: NewsContentProps) => {
  if (loading) {
    return <LoadingSkeleton count={3} />;
  }

  if (posts.length === 0) {
    return (
      <div className="col-span-full text-center py-12">
        <p className="text-gray-500 text-lg">No hay noticias disponibles</p>
      </div>
    );
  }

  return posts.map((post) => (
    <NewsCard
      key={post.id}
      title={post.title}
      date={post.updatedAt}
      image={post.cover}
      id={post.id.toString()}
    />
  ));
};
