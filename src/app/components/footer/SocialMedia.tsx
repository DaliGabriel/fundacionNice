import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { SocialMediaProps } from "../../types/footer";

export const SocialMedia = ({ title, socialLinks }: SocialMediaProps) => (
  <div className="flex flex-col items-center gap-4">
    <h3 className="text-white text-xl">{title}</h3>
    <div className="flex gap-4">
      <Link
        href={socialLinks.instagram}
        aria-label="Instagram"
        className="flex items-center justify-center"
      >
        <div className="bg-white rounded-full p-1.5 hover:scale-110 transition-all duration-300">
          <CiInstagram className="w-4.5 h-4.5 text-[#f7a81b]" />
        </div>
      </Link>
      <Link
        href={socialLinks.facebook}
        aria-label="Facebook"
        className="flex items-center justify-center"
      >
        <FaFacebook className="w-7 h-7 text-white hover:scale-110 transition-all duration-300" />
      </Link>
    </div>
  </div>
);
