import Image from "next/image";
import Link from "next/link";
import { formatDateES } from "../../../lib/utils/dateFormat";
import { NewsCardProps } from "../../../lib/types/news";

const NewsCard = ({ title, date, image, id }: NewsCardProps) => {
  return (
    <Link href={`/blog/${id}`}>
      <article className="bg-white rounded-4xl overflow-hidden  hover:shadow-xl transition-shadow duration-300 group">
        {/* Image Container */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <time className="text-sm text-gray-500 mb-2 block">
            {formatDateES(date)}
          </time>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;
