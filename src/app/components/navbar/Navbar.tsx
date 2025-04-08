"use client";
import { useState } from "react";
import DesktopNavigation from "./DesktopNavigation";
import Logo from "./Logo";
import MobileButton from "./MobileButton";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full fixed top-0 z-50">
      <div className="absolute inset-0 bg-white/70 backdrop-blur-md shadow-sm"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Logo />
          <DesktopNavigation />
          <MobileButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        {isMenuOpen && <MobileNavigation toggleMenu={toggleMenu} />}
      </div>
    </nav>
  );
};

export default Navbar;
