import Link from "next/link";
import { navigationItems } from "../../../lib/constants/navigation";
import { MobileNavigationProps } from "../../../lib/types/navigation";

const MobileNavigation = ({ toggleMenu }: MobileNavigationProps) => {
  return (
    <>
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              onClick={toggleMenu}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
