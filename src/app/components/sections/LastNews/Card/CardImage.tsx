import Image from "next/image";
import { CardImageProps } from "../../../../../lib/types/card";

const CardImage = ({ image, title }: CardImageProps) => {
  return (
    <div className="relative h-60 w-full overflow-hidden rounded-b-3xl">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover rounded-b-3xl transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default CardImage;
