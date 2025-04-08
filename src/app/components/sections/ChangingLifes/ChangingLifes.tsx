import ContentSection from "./ContentSection/ContentSection";
import ImageSection from "./ImageSection";

const ChangingLifes = () => {
  return (
    <section className="relative w-full overflow-hidden">
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
