import Image from "next/image";
import BackgroundPattern from "../common/BackgroundPattern";

const ContactCover = () => {
  return (
    <div className="absolute top-0 inset-x-0 w-full h-[500px] overflow-hidden">
      <Image
        src="/heros/contacto.jpg"
        alt="Contacto"
        className="w-full h-full object-cover"
        width={1000}
        height={1000}
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 z-10">
        <BackgroundPattern pattern="/divs/Headers.svg" />
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <h1 className="text-white text-6xl font-bold text-center max-w-4xl px-4">
          Contacto
        </h1>
      </div>
    </div>
  );
};

export default ContactCover;
