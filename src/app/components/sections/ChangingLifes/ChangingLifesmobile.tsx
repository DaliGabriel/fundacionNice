import Image from "next/image";
import Button from "../../common/Buttton";
import BackgroundPattern from "../../common/BackgroundPattern";

const ChangingLifesmobile = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/sections/cambiandoVidas.jpg"
          alt="Changing Lives"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="relative bg-[#FFA726] py-12">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-[#00295c]">
              Cambiando vidas
            </h2>
            <p className="text-base text-gray-50">
              Nuestro compromiso radica en la creación de un entorno lleno de
              oportunidades donde nuestros niños puedan desarrollar sus
              habilidades y proporcionarles las herramientas necesarias para
              hacer realidad sus sueños.
            </p>
            <div className="flex justify-center">
              <Button text="Ver video" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangingLifesmobile;
