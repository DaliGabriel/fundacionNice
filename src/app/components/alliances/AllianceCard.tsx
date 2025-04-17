import Link from "next/link";
import Image from "next/image";
import { AllianceCardProps } from "../../../lib/types/alliances";

export const AllianceCard = ({
  title,
  description,
  logo,
  bgColor = "bg-white",
  textColor = "text-gray-800",
  filter,
}: AllianceCardProps) => {
  return (
    <div className={`${bgColor} p-8 rounded-lg shadow-md flex flex-col gap-6`}>
      <div className="flex items-center justify-center h-24 relative">
        <Image
          src={logo}
          alt={`${title} logo`}
          width={120}
          height={120}
          className="object-contain"
        />
      </div>
      <h3 className={`text-xl font-bold ${textColor}`}>{title}</h3>
      <p className={`${textColor} text-sm leading-relaxed`}>{description}</p>
      <Link
        href={`/noticias?filter=${filter}`}
        className="mt-auto text-center py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        Noticias Relacionadas
      </Link>
    </div>
  );
};
