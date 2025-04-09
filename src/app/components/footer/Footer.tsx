import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { SocialMedia } from "./SocialMedia";
import { Copyright } from "./Copyright";
import {
  navigationItems,
  socialLinks,
  copyrightInfo,
} from "../../constants/footer";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F7A81B] py-4">
      <div className="container mx-auto px-4 md:px-8 lg:px-40">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Logo
              src="/logoFundacionNiceBlanco-removebg-preview.png"
              alt="Fundación NICE"
              width={150}
              height={150}
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
