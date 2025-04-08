import Link from "next/link";
import { navigationItems } from "../../constants/navigation";

const DesktopNavigation = () => {
  return (
    <div>
      <div className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopNavigation;
