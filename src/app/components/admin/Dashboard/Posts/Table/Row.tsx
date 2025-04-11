import { format } from "date-fns";
import { Post } from "../../../../../../lib/types/post";

interface RowProps {
  post: Post;
  children?: React.ReactNode;
}

const Row = ({ post, children }: RowProps) => {
  return (
    <tr key={post.id} className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={"/noticia1.jpg"}
              alt={post.title || "Post cover"}
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {post.title || "Post title"}
            </div>
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
        {children}
      </td>
    </tr>
  );
};

export default Row;
