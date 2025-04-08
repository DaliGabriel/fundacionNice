import Image from "next/image";
import { alliances } from "../../../constants/alliances";

const OurAlliances = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#002F87] mb-12">
          Nuestras Alianzas
        </h2>
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
