const LoadingNewsCard = () => (
  <div className="w-full max-w-sm bg-white rounded-lg shadow-md animate-pulse">
    <div className="h-48 bg-gray-300 rounded-t-lg" /> {/* Image skeleton */}
    <div className="p-5">
      <div className="flex gap-2 mb-3">
        <div className="h-4 bg-gray-300 rounded w-20" />{" "}
        {/* Category skeleton */}
        <div className="h-4 bg-gray-300 rounded w-32" /> {/* Date skeleton */}
      </div>
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4" />{" "}
      {/* Title skeleton */}
      <div className="space-y-2">
        {" "}
        {/* Description skeleton */}
        <div className="h-4 bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-300 rounded w-5/6" />
      </div>
    </div>
  </div>
);

const LoadingNews = () => {
  return (
    <section className="py-16 bg-[#f2f2f2]">
      <div className="container mx-auto">
        <div className="flex justify-center mb-12">
          <div className="h-10 bg-gray-300 rounded w-64" />{" "}
          {/* Title skeleton */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-7xl px-4 place-items-center">
          <LoadingNewsCard />
          <LoadingNewsCard />
          <LoadingNewsCard />
        </div>
        <div className="text-center mt-12">
          <div className="inline-block">
            <div className="h-12 bg-gray-300 rounded w-40" />{" "}
            {/* Button skeleton */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadingNews;
