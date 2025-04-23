import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex-shrink-0 relative w-[120px] h-[40px] md:w-[150px] md:h-[50px] mx-auto md:mx-0 ">
      <Link href="/" className="block w-full h-full">
        <Image
          src="/logos/fundacionNice.svg"
          alt="Fundación NICE Logo"
          fill
          className="object-contain"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
