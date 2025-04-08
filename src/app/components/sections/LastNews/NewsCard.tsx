import Image from "next/image";
import { NewsCardProps } from "../../../types/lastNews";

const NewsCard = ({
  image,
  category,
  date,
  title,
  description,
}: NewsCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">

          <span className="text-[#FDB913] uppercase text-sm font-medium">
            {category}
          </span>
          <br />
          <span className="text-gray-500 text-sm">{date}</span>

        <h3 className="text-xl font-bold text-[#002E6D] mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
