import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { SocialMedia } from "./SocialMedia";
import { Copyright } from "./Copyright";
import BackgroundPattern from "../common/BackgroundPattern";
import {
  navigationItems,
  socialLinks,
  copyrightInfo,
} from "../../../lib/constants/footer";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F7A81B] py-4 relative">
      <BackgroundPattern pattern="/divs/footer.svg" />
      <div className="container mx-auto px-4 md:px-8 lg:px-40">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Logo
              src="/logos/FundacionNiceBlanco.svg"
              alt="Fundación NICE"
              width={150}
              height={150}
            />
            <Image
              src="/divs/FooterSeparationBar.svg"
              alt="Linea separación blanca"
              width={1}
              height={1}
            />
            <Navigation items={navigationItems} />
          </div>
          <div className="flex flex-col items-center gap-4">
            <SocialMedia title="Síguenos" socialLinks={socialLinks} />
            <Copyright {...copyrightInfo} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
