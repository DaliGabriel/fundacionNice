import { ContentState } from "../../../../../lib/constants/dashboardState";
import { PostsContentProps } from "../../../../../lib/types/post";
import { Posts } from "./index";
import Table from "./Table";

export const PostsContent = ({
  state,
  posts,
  error,
  onEdit,
  onDelete,
}: PostsContentProps) => {
  switch (state) {
    case ContentState.LOADING:
      return <Posts.Loading />;
    case ContentState.ERROR:
      return <Posts.Error error={error || "Error loading posts"} />;
    case ContentState.EMPTY:
      return <Posts.EmptyState />;
    case ContentState.SUCCESS:
      return <Table.Root posts={posts} onEdit={onEdit} onDelete={onDelete} />;
  }
};
