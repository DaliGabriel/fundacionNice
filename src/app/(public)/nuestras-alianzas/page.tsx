import { alliancesSection } from "../../../lib/constants/alliances";
import { AllianceSection } from "../../components/alliances/AllianceSection";
import Hero from "../../components/common/Hero";
import AllianceText from "../../components/alliances/AllianceText";
const NuestrasAlianzas = () => {
  return (
    <main className="min-h-screen ">
      <Hero
        title="Nuestras Alianzas"
        image="/heros/nuestrasalianzas.jpg"
        mobileImage="/heros/nuestrasalianzasMobile.jpg"
      />
      <div className="max-w-7xl mx-auto dark:bg-[#e6e6e6] bg-[#e6e6e6] text-black dark:text-black">
        <AllianceText />
        <div className="flex flex-col divide-y">
          {alliancesSection.map((alliance, index) => (
            <AllianceSection
              key={alliance.title}
              title={alliance.title}
              description={alliance.description}
              image={alliance.image}
              logo={alliance.logo}
              filter={alliance.filter}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default NuestrasAlianzas;
