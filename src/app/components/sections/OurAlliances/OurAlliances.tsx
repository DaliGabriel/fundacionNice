"use client";

import Image from "next/image";
import { useState } from "react";
import {
  alliances,
  alliancesMobile,
} from "../../../../lib/constants/alliances";
import Title from "../../common/Title";
import Link from "next/link";

const OurAlliances = () => {
  const [hoveredAlliance, setHoveredAlliance] = useState<string | null>(null);

  const renderAlliances = (alliancesArray: typeof alliances) => {
    return alliancesArray.map((alliance) => (
      <Link href={`/noticias?filter=${alliance.filter}`} key={alliance.name}>
        <div
          key={alliance.name}
          className="w-40 md:w-52 h-24 relative grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setHoveredAlliance(alliance.name)}
          onMouseLeave={() => setHoveredAlliance(null)}
        >
          <Image
            src={
              hoveredAlliance === alliance.name
                ? alliance.logoWithColor
                : alliance.logo
            }
            alt={`${alliance.name} logo`}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
    ));
  };

  return (
    <section className="py-16 bg-[#f2f2f2]">
      <div className="container mx-auto px-4">
        <Title
          title="Nuestras Alianzas"
          className="text-3xl md:text-4xl  text-[#00295c] mb-12"
        />
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {/* Desktop version */}
          <div className="hidden md:flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {renderAlliances(alliances)}
          </div>
          {/* Mobile version */}
          <div className="flex md:hidden flex-wrap justify-center items-center gap-8 md:gap-12">
            {renderAlliances(alliancesMobile)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAlliances;
