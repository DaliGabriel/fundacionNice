import Table from "./Table";
import EmptyState from "./EmptyState";
import Loading from "./Loading";
import Error from "./Error";

export const Posts = {
  Table,
  EmptyState,
  Loading,
  Error,
} as const;

// Export individual components for direct imports if needed
export { Table, EmptyState as PostsEmptyState, Loading as PostsLoading };
