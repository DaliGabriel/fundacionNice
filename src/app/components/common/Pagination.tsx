import { PaginationProps } from "../../../lib/types/news";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 4;

    for (let i = 1; i <= Math.min(totalPages, maxVisiblePages); i++) {
      pages.push(i);
    }

    return pages;
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav
      className="flex justify-center items-center gap-2 py-8"
      aria-label="Pagination"
    >
      {/* Previous button */}
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className="text-gray-400 hover:text-gray-600 disabled:opacity-50 text-4xl cursor-pointer"
        aria-label="Previous page"
      >
        ‹
      </button>

      {/* Page numbers */}
      <div className="flex items-center ">
        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 flex items-center justify-center text-md pt-2 cursor-pointer ${
              currentPage === page
                ? "text-blue-500"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next button */}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="text-gray-400 hover:text-gray-600 disabled:opacity-50 text-4xl cursor-pointer"
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  );
};

export default Pagination;
