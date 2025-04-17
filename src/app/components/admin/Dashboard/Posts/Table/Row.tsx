import { format } from "date-fns";
import Image from "next/image";
import { useState } from "react";
import { RowProps } from "../../../../../../lib/types/table";
import PreviewModal from "./PreviewModal";

const Row = ({ post, children }: RowProps) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <tr key={post.id} className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="h-10 w-10 flex-shrink-0 relative">
              <Image
                className="rounded-full object-cover"
                src={post.cover || "/noticia1.jpg"}
                alt={post.title || "Post cover"}
                fill
                sizes="(max-width: 40px) 100vw, 40px"
              />
            </div>
            <div className="ml-4">
              <button
                onClick={() => setIsPreviewOpen(true)}
                className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
              >
                {post.title || "Post title"}
              </button>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
            {post.category || "Post category"}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              post.published
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {post.published ? "Published" : "Draft"}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {format(new Date(post.createdAt), "MMM d, yyyy")}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="text-blue-600 hover:text-blue-900 mr-4 cursor-pointer"
          >
            Preview
          </button>
          {children}
        </td>
      </tr>

      <PreviewModal
        post={post}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  );
};

export default Row;
