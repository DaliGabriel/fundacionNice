import Image from "next/image";
import { BlogCoverProps } from "../../../lib/types/blog";



export const BlogCover = ({ coverUrl, title }: BlogCoverProps) => {
  if (!coverUrl) return null;

  return (
    <div className="absolute top-0 inset-x-0 w-full h-[500px] overflow-hidden">
      <Image
        src={coverUrl}
        alt={title}
        className="w-full h-full object-cover"
        width={1000}
        height={1000}
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
};
