import Link from "next/link";
import { SocialMediaProps } from "../../../lib/types/footer";
import { SocialMediaIcon } from "./SocialMediaIcons";

export const SocialMedia = ({ title, socialLinks }: SocialMediaProps) => (
  <div className="flex flex-col items-center gap-4">
    <h3 className="text-white text-xl">{title}</h3>
    <div className="flex gap-4">
      <Link
        href={socialLinks.instagram}
        aria-label="Instagram"
        className="flex items-center justify-center hover:scale-110 transition-all duration-300"
        target="_blank"
      >
        <SocialMediaIcon type="instagram" className="text-white" />
      </Link>
      <Link
        href={socialLinks.facebook}
        aria-label="Facebook"
        className="flex items-center justify-center hover:scale-110 transition-all duration-300"
        target="_blank"
      >
        <SocialMediaIcon type="facebook" className="text-white" />
      </Link>
    </div>
  </div>
);
