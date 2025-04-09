import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F7A81B] py-4">
      <div className="container px-40">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-8">
            <Image
              src="/logoFundacionNiceBlanco-removebg-preview.png"
              alt="Fundación NICE"
              width={150}
              height={150}
            />
            <nav>
              <ul className="flex flex-col gap-2 text-white uppercase text-bold">
                <li>
                  <Link href="#" className="hover:underline">
                    Quienes somos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Nuestras alianzas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Noticias
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-white text-xl">Síguenos</h3>
            <div className="flex gap-4">
              <Link
                href="#"
                aria-label="Instagram"
                className="w-[35px] h-[35px] flex items-center justify-center"
              >
                <Image
                  src="/instagram-removebg-preview.png"
                  alt="Instagram"
                  width={35}
                  height={35}
                  className="hover:scale-110 transition-all duration-300 hover:cursor-pointer object-contain"
                />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="w-[35px] h-[35px] flex items-center justify-center"
              >
                <Image
                  src="/facebook-removebg-preview.png"
                  alt="Facebook"
                  width={28}
                  height={28}
                  className="hover:scale-110 transition-all duration-300 hover:cursor-pointer object-contain"
                />
              </Link>
            </div>
            <div className="flex gap-2 text-white text-sm mt-2">
              <span>© Fundación Nice. Todos los derechos reservados 2025</span>
              <Link href="#" className="hover:underline">
                Aviso de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
