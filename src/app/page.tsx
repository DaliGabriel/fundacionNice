import Footer from "./components/footer/Footer";
import Hero from "./components/header/Hero";
import Navbar from "./components/navbar/Navbar";
import ChangingLifes from "./components/sections/ChangingLifes/ChangingLifes";
import MissionStatement from "./components/sections/MissionStatement/MissionStatement";
import OurAlliances from "./components/sections/OurAlliances/OurAlliances";
import LastNews from "./components/sections/LastNews/LastNews";
import OurNumbers from "./components/sections/OurNumbers/OurNumbers";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <MissionStatement />
        <OurAlliances />
        <ChangingLifes />
        <OurNumbers />
        <LastNews />
      </main>
      <Footer />
    </div>
  );
}
