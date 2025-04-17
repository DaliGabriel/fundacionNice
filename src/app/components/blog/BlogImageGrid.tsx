import Image from "next/image";
import { BlogImageGridProps } from "../../../lib/types/blog";



export const BlogImageGrid = ({ images, startIndex }: BlogImageGridProps) => {
  const validImages = images.filter((img): img is string => !!img);

  if (validImages.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {validImages.map((imageUrl, index) => (
        <div
          key={`${startIndex}-${index}`}
          className="relative h-[250px] rounded-lg overflow-hidden"
        >
          <Image
            src={imageUrl}
            alt=""
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
            priority={startIndex === 1} // Only prioritize first set of images
          />
        </div>
      ))}
    </div>
  );
};
