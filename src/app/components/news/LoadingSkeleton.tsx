export const LoadingSkeleton = ({ count = 6 }: { count?: number }) => {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="w-full bg-white rounded-lg shadow-md animate-pulse"
        >
          <div className="h-48 bg-gray-300 rounded-t-lg w-full" />
          <div className="p-5">
            <div className="flex gap-2 mb-3">
              <div className="h-4 bg-gray-300 rounded w-20" />
              <div className="h-4 bg-gray-300 rounded w-32" />
            </div>
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded w-full" />
              <div className="h-4 bg-gray-300 rounded w-5/6" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
