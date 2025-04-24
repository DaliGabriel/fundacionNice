import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarProps } from "../../../../../lib/types/adminNavigation";
import { menuItems } from "../../../../../lib/constants/adminNavigation";

const Navbar = ({ isOpen, setIsOpen }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer fixed top-4 z-20 p-2 rounded-lg bg-white shadow-md hover:bg-gray-50 transition-all duration-300 ${
          isOpen ? "left-64" : "left-4"
        }`}
      >
        {isOpen ? "◀️" : "▶️"}
      </button>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 h-screen bg-white border-r border-gray-200 w-64 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div className="p-4 pt-16">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
          </div>

          <div className="space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
