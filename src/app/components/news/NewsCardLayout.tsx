const NewsCardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="container mx-auto px-4 py-12 bg-[#e6e6e6] dark:bg-[#e6e6e6]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {children}
      </div>
    </section>
  );
};

export default NewsCardLayout;
