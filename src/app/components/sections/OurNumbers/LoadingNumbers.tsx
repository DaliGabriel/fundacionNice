import Title from "../../common/Title";

const LoadingNumbers = () => {
  return (
    <section className="py-16 bg-[#f2f2f2]">
      <div className="container mx-auto">
        <Title
          title="En cifras"
          className="text-3xl md:text-4xl text-[#00295c] mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="w-40 h-40 mb-4 bg-gray-300 rounded-full mx-auto"></div>
              <div className="h-12 bg-gray-300 rounded w-32 mx-auto mb-2"></div>
              <div className="h-6 bg-gray-300 rounded w-48 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoadingNumbers;
