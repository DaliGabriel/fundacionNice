import { NewsPagination } from "./NewsPagination";
import NewsCardLayout from "./NewsCardLayout";
import { useNews } from "../../../lib/hooks/useNews";
import { FilterBanner } from "./FilterBanner";
import { NewsContent } from "./NewsContent";

const NewsContentWrapper = () => {
  const { currentPosts, loading, totalPages, currentPage, handlePageChange } =
    useNews();

  return (
    <>
      <FilterBanner />
      <NewsCardLayout>
        <NewsContent posts={currentPosts} loading={loading} />
      </NewsCardLayout>
      <NewsPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        loading={loading}
      />
    </>
  );
};

export default NewsContentWrapper;
