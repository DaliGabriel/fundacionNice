import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full relative h-[500px]">
      <Image
        src="/hero.jpg"
        alt="Porque cada sueño merece una oportunidad"
        fill
        className="object-cover w-full"
        priority
      />
    </div>
  );
};

export default Hero;
