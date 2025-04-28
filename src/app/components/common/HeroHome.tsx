import Image from "next/image";
import BackgroundPattern from "./BackgroundPattern";
import { HeroProps } from "../../../lib/types/hero";

const Hero = ({
  title = "",
  image,
  mobileImage,
  darkOverlay = true,
  backgroundPattern = true,
}: HeroProps) => {
  return (
    <div
      className={`relative min-h-[400px] md:min-h-[500px] lg:min-h-[700px] w-full hero-container`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <div className="hidden md:block h-full">
          <Image
            src={image}
            alt={title || ""}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            quality={100}
            style={{
              objectFit: "cover",
              objectPosition: "center 30%",
            }}
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden h-full">
          <Image
            src={mobileImage || image}
            alt={title || ""}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={100}
            style={{
              objectFit: "cover",
              objectPosition: "center 30%",
            }}
          />
        </div>

        {darkOverlay && (
          <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply" />
        )}
      </div>

      {/* Background Pattern */}
      {backgroundPattern && (
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full transform-gpu">
            <BackgroundPattern pattern="/divs/Headers.svg" />
          </div>
        </div>
      )}

      {/* Content */}
      {title && (
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl px-4">
            {title}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Hero;
