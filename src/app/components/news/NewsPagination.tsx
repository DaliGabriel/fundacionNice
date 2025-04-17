import Pagination from "../common/Pagination";
import { NewsPaginationProps } from "../../../lib/types/news";

export const NewsPagination = ({
  totalPages,
  currentPage,
  onPageChange,
  loading,
}: NewsPaginationProps) => {
  if (totalPages <= 1 || loading) return null;

  return (
    <div className="py-8">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};
