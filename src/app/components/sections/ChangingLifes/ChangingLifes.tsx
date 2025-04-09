import ContentSection from "./ContentSection/ContentSection";
import ImageSection from "./ContentSection/ImageSection";

const ChangingLifes = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gray-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 items-center">
          <ImageSection />
          <ContentSection />
        </div>
      </div>
    </section>
  );
};

export default ChangingLifes;
