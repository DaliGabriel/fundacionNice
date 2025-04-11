import { PostsContentProps } from "@/lib/types/post";
import { Posts } from ".";

const PostsTable = ({
  posts,
  onEdit,
  onDelete,
}: Pick<PostsContentProps, "posts" | "onEdit" | "onDelete">) => (
  <Posts.Table.Layout>
    <Posts.Table.Header />
    <tbody className="bg-white divide-y divide-gray-200">
      {posts.map((post) => (
        <Posts.Table.Row key={post.id} post={post}>
          <Posts.Table.Actions.Edit post={post} onEdit={onEdit} />
          <Posts.Table.Actions.Delete post={post} onDelete={onDelete} />
        </Posts.Table.Row>
      ))}
    </tbody>
  </Posts.Table.Layout>
);

export default PostsTable;
