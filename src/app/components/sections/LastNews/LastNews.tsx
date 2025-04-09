import Link from "next/link";
import { news } from "../../../constants/news";
import Button from "../../common/Buttton";
import Title from "../../common/Title";
import CardCategory from "./Card/CardCategory";
import CardContentLayout from "./Card/CardContentLayout";
import CardDate from "./Card/CardDate";
import CardDescription from "./Card/CardDescription";
import CardImage from "./Card/CardImage";
import CardLayout from "./Card/CardLayout";
import CardTitle from "./Card/CardTitle";
const LastNews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <Title
          title="Últimas noticias"
          className="text-3xl md:text-4xl text-[#002E6D] mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4">
          {news.map((item, index) => (
            <CardLayout key={index}>
              <CardImage image={item.image} title={item.title} />
              <CardContentLayout>
                <CardCategory category={item.category} />
                <CardDate date={item.date} />
                <CardTitle title={item.title} />
                <CardDescription description={item.description} />
              </CardContentLayout>
            </CardLayout>
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
