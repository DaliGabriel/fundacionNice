export const LoadingSkeleton = ({ count }: { count: number }) => {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-gray-200 h-48 rounded-t-4xl"></div>
          <div className="p-6 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-6 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </>
  );
};
