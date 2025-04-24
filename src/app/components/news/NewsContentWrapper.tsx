import { useNews } from "../../../lib/hooks/useNews";
import { FilterBanner } from "./FilterBanner";
import { NewsContent } from "./NewsContent";
import NewsCardLayout from "./NewsCardLayout";
import { NewsPagination } from "./NewsPagination";
import { Suspense } from "react";

const NewsContentWrapperContent = () => {
  const { currentPosts, isLoading, totalPages, currentPage, handlePageChange } =
    useNews();

  return (
    <>
      <FilterBanner />
      <NewsCardLayout>
        <NewsContent posts={currentPosts} loading={isLoading} />
      </NewsCardLayout>
      <NewsPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        loading={isLoading}
      />
    </>
  );
};

const NewsContentWrapper = () => {
  return (
    <Suspense
      fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-xl" />}
    >
      <NewsContentWrapperContent />
    </Suspense>
  );
};

export default NewsContentWrapper;
