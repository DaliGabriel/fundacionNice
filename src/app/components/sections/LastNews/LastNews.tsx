import Link from "next/link";
import { getAllPosts } from "../../../../lib/services/server/post";
import Button from "../../common/Buttton";
import Title from "../../common/Title";
import CardCategory from "./Card/CardCategory";
import CardContentLayout from "./Card/CardContentLayout";
import CardDate from "./Card/CardDate";
import CardDescription from "./Card/CardDescription";
import CardImage from "./Card/CardImage";
import CardLayout from "./Card/CardLayout";
import CardTitle from "./Card/CardTitle";

// Prevent caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const LastNews = async () => {
  const posts = await getAllPosts();
  // Filter published posts and get last three
  const publishedPosts = posts.filter((post) => post.published);
  const lastThreePosts = publishedPosts.slice(-3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <Title
          title="Últimas noticias"
          className="text-3xl md:text-4xl text-[#002E6D] mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4">
          {lastThreePosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
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
