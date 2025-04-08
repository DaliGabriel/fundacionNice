import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <>
      <div className="flex-shrink-0">
        <Link href="/">
          <Image
            src="/fundacionNiceLogoN.png"
            alt="Fundación NICE Logo"
            width={120}
            height={40}
            className="h-auto w-auto"
          />
        </Link>
      </div>
    </>
  );
};

export default Logo;
