import { Numbers } from "@/lib/types/numbers";
import { Layout } from "./Layout";
import { Header } from "./Header";
import { Body } from "./Body";
import { Row } from "./Row";

interface TableProps {
  numbers: Numbers[];
  onEdit: (number: Numbers) => void;
}

const Table = ({ numbers, onEdit }: TableProps) => {
  return (
    <Layout>
      <Header />
      <Body>
        {numbers.map((number) => (
          <Row key={number.id} number={number} onEdit={onEdit} />
        ))}
      </Body>
    </Layout>
  );
};

export { Table };
