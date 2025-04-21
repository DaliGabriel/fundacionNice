import Image from "next/image";
import Background from "./Background";
import WaveTop from "./WaveTop";
import WaveBottom from "./WaveBottom";
import Button from "../../common/Buttton";

const ChangingLifes = () => {
  return (
    <section className="relative mx-auto overflow-hidden">
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
      <div className="py-32">
        <Background />
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 items-center text-center">
            <div />
            <div className="space-y-6 px-4 md:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#00295c]">
                Cambiando vidas
              </h2>
              <p className="text-base md:text-lg text-gray-50">
                Nuestro compromiso radica en la creación de un entorno lleno de
                oportunidades donde nuestros niños puedan desarrollar sus
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
  );
};

export default ChangingLifes;
