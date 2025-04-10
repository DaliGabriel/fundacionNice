import { LogoProps } from "../../../lib/types/footer";
import Image from "next/image";

export const Logo = ({ src, alt, width, height }: LogoProps) => (
  <Image src={src} alt={alt} width={width} height={height} className="w-40" />
);
