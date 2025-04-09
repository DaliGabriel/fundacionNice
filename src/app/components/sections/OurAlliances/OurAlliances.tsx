import Image from "next/image";
import { alliances } from "../../../constants/alliances";
import Title from "../../common/Title";

const OurAlliances = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Title
          title="Nuestras Alianzas"
          className="text-3xl md:text-4xl  text-[#00295c] mb-12"
        />
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {alliances.map((alliance) => (
            <div
              key={alliance.name}
              className="w-40 md:w-52 h-24 relative grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={alliance.logo}
                alt={`${alliance.name} logo`}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAlliances;
