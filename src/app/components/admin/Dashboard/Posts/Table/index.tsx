import { TableProps } from "../../../../../../lib/types/post";
import Body from "./Body";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import Header from "./Header";
import Layout from "./Layout";
import Row from "./Row";

const Table = ({ posts, onEdit, onDelete }: TableProps) => {
  return (
    <Layout>
      <Header />
      <Body>
        {posts.map((post) => (
          <Row key={post.id} post={post}>
            <EditButton post={post} onEdit={onEdit} />
            <DeleteButton post={post} onDelete={onDelete} />
          </Row>
        ))}
      </Body>
    </Layout>
  );
};

// Create a namespace for the Table component
const TableNamespace = {
  Root: Table,
  Layout,
  Header,
  Row,
  Actions: {
    Edit: EditButton,
    Delete: DeleteButton,
  },
  Body,
} as const;

// Export the namespace as default
export default TableNamespace;

// Export individual components for direct imports if needed
export {
  Body as TableBody, DeleteButton as TableDeleteButton, EditButton as TableEditButton, Header as TableHeader, Layout as TableLayout, Row as TableRow
};

