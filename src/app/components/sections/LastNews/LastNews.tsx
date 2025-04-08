import Link from "next/link";
import NewsCard from "./NewsCard";
import { news } from "../../../constants/news";
import Button from "../../common/Buttton";

const LastNews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#002E6D] text-center mb-12">
          Últimas noticias
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4">
          {news.map((item, index) => (
            <NewsCard
              key={index}
              image={item.image}
              category={item.category}
              date={item.date}
              title={item.title}
              description={item.description}
            />
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
