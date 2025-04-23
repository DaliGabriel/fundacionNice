import ChangingLifes from "../components/sections/ChangingLifes/ChangingLifes";
import MissionStatement from "../components/sections/MissionStatement/MissionStatement";
import OurAlliances from "../components/sections/OurAlliances/OurAlliances";
import LastNews from "../components/sections/LastNews/LastNews";
import OurNumbers from "../components/sections/OurNumbers/OurNumbers";
import Hero from "../components/common/Hero";

export default function Home() {
  return (
    <>
      <Hero
        darkOverlay={false}
        image="/heros/home.jpg"
        mobileImage="/heros/homeMobile.jpg"
      />
      <MissionStatement />
      <OurAlliances />
      <ChangingLifes />
      <OurNumbers />
      <LastNews />
    </>
  );
}
