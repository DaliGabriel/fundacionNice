import Image from "next/image";
import Link from "next/link";
import { AllianceSectionProps } from "../../../lib/types/alliances";
import Button from "../common/Buttton";

export const AllianceSection = ({
  title,
  description,
  image,
  logo,
  filter,
  isReversed = false,
}: AllianceSectionProps) => {

  
  const contentSection = (
    <div
      className={`w-full md:w-1/2 ${
        isReversed ? "bg-[#FDB913]" : "bg-gray-100"
      } p-6 md:p-12 flex flex-col justify-center text-center`}
    >
      <h2
        className={`text-2xl md:text-3xl font-bold mb-4 md:mb-6 ${
          isReversed ? "text-blue-900" : "text-[#FDB913]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mb-6 md:mb-8 text-base md:text-lg leading-relaxed ${
          isReversed ? "text-white" : "text-gray-700"
        }`}
      >
        {description}
      </p>
      <Link href={`/noticias?filter=${filter}`} className="mx-auto">
        <Button text="Noticias Relacionadas" />
      </Link>
    </div>
  );

  const imageSection = (
    <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px] flex items-center justify-center overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover z-0"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-[#04315e] opacity-40 z-10" />
      <div
        className={`relative z-20 ${
          title === "Lúdica" || title === "Scholas Ocurrentes"
            ? "w-60 h-60"
            : "w-32 h-32"
        }`}
      >
        <Image
          src={logo}
          alt={`${title} logo`}
          fill
          className="object-contain filter brightness-0 invert"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row">
      {/* On mobile: always image first */}
      <div className="md:hidden">
        {imageSection}
        {contentSection}
      </div>

      {/* On desktop: respect isReversed prop */}
      <div className="hidden md:flex md:flex-row">
        {isReversed ? (
          <>
            {contentSection}
            {imageSection}
          </>
        ) : (
          <>
            {imageSection}
            {contentSection}
          </>
        )}
      </div>
    </div>
  );
};
