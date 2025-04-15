"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  LoadingStateProps,
  Post,
  PostCardProps,
} from "../../../../lib/types/post";
import Button from "../../common/Buttton";
import Title from "../../common/Title";
import CardCategory from "./Card/CardCategory";
import CardContentLayout from "./Card/CardContentLayout";
import CardDate from "./Card/CardDate";
import CardDescription from "./Card/CardDescription";
import CardImage from "./Card/CardImage";
import CardLayout from "./Card/CardLayout";
import CardTitle from "./Card/CardTitle";

// Components
const LoadingState = ({ title }: LoadingStateProps) => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto">
      <Title
        title={title}
        className="text-3xl md:text-4xl text-[#002E6D] mb-12"
      />
      <div className="text-center">Cargando...</div>
    </div>
  </section>
);

const PostCard = ({ post }: PostCardProps) => (
  <Link href={`/blog/${post.id}`}>
    <CardLayout>
      <CardImage image={post.cover} title={post.title} />
      <CardContentLayout>
        <CardCategory category={post.category} />
        <CardDate
          date={new Date(post.createdAt).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        />
        <CardTitle title={post.title} />
        <CardDescription description={post.paragraph1} />
      </CardContentLayout>
    </CardLayout>
  </Link>
);

// Custom hook for data fetching
const useLastNews = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/lastNews");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading };
};

// Main component
const LastNews = () => {
  const { posts, loading } = useLastNews();

  if (loading) {
    return <LoadingState title="Últimas noticias" />;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <Title
          title="Últimas noticias"
          className="text-3xl md:text-4xl text-[#002E6D] mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/noticias">
            <Button text="Ver más Noticias" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LastNews;
