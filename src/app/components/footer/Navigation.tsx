import { NavigationProps } from "../../../lib/types/footer";
import Link from "next/link";

export const Navigation = ({ items }: NavigationProps) => (
  <nav className="text-center md:text-left">
    <ul className="flex flex-col gap-2 text-white uppercase text-bold">
      {items.map((item) => (
        <li key={item.label}>
          <Link href={item.href} className="hover:underline">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
