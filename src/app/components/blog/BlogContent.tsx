import { BlogImageGrid } from "./BlogImageGrid";
import Link from "next/link";
import Button from "../../components/common/Buttton";
import { BlogContentProps } from "../../../lib/types/blog";

export const BlogContent = ({
  paragraph1,
  paragraph2,
  images1,
  images2,
  buttonLink,
}: BlogContentProps) => {
  return (
    <div className="space-y-8">
      <p className="text-lg text-gray-700 leading-relaxed">{paragraph1}</p>

      <BlogImageGrid images={images1} startIndex={1} />

      {paragraph2 && (
        <p className="text-lg text-gray-700 leading-relaxed">{paragraph2}</p>
      )}

      <BlogImageGrid images={images2} startIndex={2} />

      {buttonLink && (
        <div className="flex justify-center mt-8">
          <Link href={buttonLink}>
            <Button text="Galería de Fotos" />
          </Link>
        </div>
      )}
    </div>
  );
};
