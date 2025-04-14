import Hero from "../components/header/Hero";
import ChangingLifes from "../components/sections/ChangingLifes/ChangingLifes";
import MissionStatement from "../components/sections/MissionStatement/MissionStatement";
import OurAlliances from "../components/sections/OurAlliances/OurAlliances";
import LastNews from "../components/sections/LastNews/LastNews";
import OurNumbers from "../components/sections/OurNumbers/OurNumbers";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionStatement />
      <OurAlliances />
      <ChangingLifes />
      <OurNumbers />
      <LastNews />
    </>
  );
}
