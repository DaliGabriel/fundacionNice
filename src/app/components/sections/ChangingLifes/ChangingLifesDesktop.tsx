import Image from "next/image";
import WaveTop from "./Shapes/WaveTop";
import BackgroundPattern from "../../common/BackgroundPattern";
import Button from "../../common/Buttton";
import WaveBottom from "./Shapes/WaveBottom";

const ChangingLifesDesktop = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <section className="relative w-full">
        <div className="absolute inset-0 w-full md:w-1/2 left-0">
          <Image
            src="/sections/cambiandoVidas.jpg"
            alt="Changing Lives"
            fill
            className="object-cover"
            priority
          />
        </div>
        <WaveTop />
        <div className="relative lg:py-10 xl:py-24 2xl:py-28 w-full">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div className="w-full h-full max-w-[2000px] mx-auto relative">
              <BackgroundPattern pattern="/divs/Div2.svg" />
            </div>
          </div>
          <div className="container mx-auto relative z-10 max-w-[1400px]">
            <div className="grid md:grid-cols-2 items-center text-center">
              <div />
              <div className="space-y-6 px-4 md:px-8 lg:px-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#00295c]">
                  Cambiando vidas
                </h2>
                <p className="text-base md:text-lg text-gray-50">
                  Nuestro compromiso radica en la creación de un entorno lleno
                  de oportunidades donde nuestros niños puedan desarrollar sus
                  habilidades y proporcionarles las herramientas necesarias para
                  hacer realidad sus sueños.
                </p>
                <Button text="Ver video" />
              </div>
            </div>
          </div>
        </div>
        <WaveBottom />
      </section>
    </div>
  );
};

export default ChangingLifesDesktop;
