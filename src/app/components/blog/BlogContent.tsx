/**
 * A component that displays the main content of a blog post.
 * This component handles the layout and display of text content, images, and optional links.
 *
 * @module BlogContent
 */

import { BlogImageGrid } from "./BlogImageGrid";
import Link from "next/link";
import Button from "../../components/common/Buttton";
import { BlogContentProps } from "../../../lib/types/blog";

/**
 * BlogContent component that displays the main content of a blog post.
 *
 * @param {BlogContentProps} props - The component props
 * @param {string} props.paragraph1 - The first paragraph of content
 * @param {string} [props.paragraph2] - Optional second paragraph of content
 * @param {string[]} [props.images1] - First set of images to display
 * @param {string[]} [props.images2] - Second set of images to display
 * @param {string} [props.buttonLink] - Optional link to an external gallery
 *
 * @returns {JSX.Element} A styled blog content section
 *
 * @description
 * This component:
 * 1. Displays the main text content in paragraphs
 * 2. Shows images in a grid layout between paragraphs
 * 3. Optionally displays a button linking to an external gallery
 *
 * @example
 * <BlogContent
 *   paragraph1="First paragraph of content..."
 *   paragraph2="Second paragraph of content..."
 *   images1={["image1.jpg", "image2.jpg"]}
 *   images2={["image3.jpg", "image4.jpg"]}
 *   buttonLink="https://example.com/gallery"
 * />
 */
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
