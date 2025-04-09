import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "../../constants/navigation";

const DesktopNavigation = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition-colors duration-200 ${
                isActive
                  ? "text-[#00295c]"
                  : "text-gray-500 hover:text-[#00295c]"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopNavigation;
