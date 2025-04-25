import Image from "next/image";
import Link from "next/link";
import { formatDateES } from "../../../lib/utils/dateFormat";
import { NewsCardProps } from "../../../lib/types/news";

const NewsCard = ({ title, date, image, id }: NewsCardProps) => {
  return (
    <Link href={`/blog/${id}`}>
      <article className="bg-white rounded-4xl overflow-hidden  hover:shadow-xl transition-shadow duration-300 group">
        <div className="relative h-60 w-full overflow-hidden rounded-b-3xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-b-3xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="p-6">
          <time className="text-md font-semibold text-gray-500 mb-2 block">
            {formatDateES(date)}
          </time>
          <h3 className="text-2xl font-bold text-[#00295c] group-hover:text-[#92c0e9] transition-colors duration-300">
            {title}
          </h3>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;
