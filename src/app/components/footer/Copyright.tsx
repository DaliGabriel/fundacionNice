import Link from "next/link";
import { CopyrightProps } from "../../../lib/types/footer";

export const Copyright = ({ text, privacyLink }: CopyrightProps) => (
  <div className="flex flex-col md:flex-row gap-2 text-white text-sm mt-2 text-center md:text-left">
    <span>{text}</span>
    <Link href={privacyLink.href} className="hover:underline md:ml-2">
      {privacyLink.label}
    </Link>
  </div>
);
