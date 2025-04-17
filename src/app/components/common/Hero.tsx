import Image from "next/image";

const Hero = ({ title, image }: { title: string; image: string }) => {
  return (
    <div>
      <div className="relative h-[400px] w-full">
        {/* Background Image */}
        <Image src={image} alt={title} fill className="object-cover" priority />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-blue-950/40" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold text-center max-w-4xl px-4">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
