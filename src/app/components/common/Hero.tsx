import Image from "next/image";
import BackgroundPattern from "./BackgroundPattern";
import { HeroProps } from "../../../lib/types/hero";

const Hero = ({ title, image, mobileImage, darkOverlay = true }: HeroProps) => {
  return (
    <div>
      <div className="relative h-[400px] w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Image */}
          <div className="hidden md:block h-full">
            <Image
              src={image}
              alt={title || ""}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
              quality={90}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>

          {/* Mobile Image */}
          <div className="block md:hidden h-full">
            <Image
              src={mobileImage || image} // Fallback to desktop image if mobile not provided
              alt={title || ""}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
              quality={90}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>

          {darkOverlay && <div className="absolute inset-0 bg-blue-950/40" />}
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 z-10">
          <BackgroundPattern pattern="/divs/Headers.svg" />
        </div>

        {/* Content */}
        <div className="relative z-30 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
