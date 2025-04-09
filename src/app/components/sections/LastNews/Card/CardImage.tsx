import Image from "next/image";

interface CardImageProps {
  image: string;
  title: string;
}

const CardImage = ({ image, title }: CardImageProps) => {
  return (
    <div>
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </div>
  );
};

export default CardImage;
