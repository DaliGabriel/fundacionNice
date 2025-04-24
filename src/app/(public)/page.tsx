import HeroHome from "../components/common/HeroHome";
import ChangingLifes from "../components/sections/ChangingLifes/ChangingLifes";
import LastNews from "../components/sections/LastNews/LastNews";
import MissionStatement from "../components/sections/MissionStatement/MissionStatement";
import OurAlliances from "../components/sections/OurAlliances/OurAlliances";
import OurNumbers from "../components/sections/OurNumbers/OurNumbers";

export default function Home() {
  return (
    <>
      <HeroHome
        backgroundPattern={false}
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
