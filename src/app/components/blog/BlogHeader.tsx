import { formatDateES } from "@/lib/utils/dateFormat";
import { BlogHeaderProps } from "../../../lib/types/blog";



export const BlogHeader = ({ title, date }: BlogHeaderProps) => {
  return (
    <>
      <h1 className="font-bold mb-3  text-[#0A2355] text-center text-2xl sm:mb-4 sm:text-3xl md:text-4xl sm:text-start  lg:text-5xl">
        {title}
      </h1>

      <div className="text-[#F7A81B] mb-6 text-center text-base sm:mb-8 sm:text-lg sm:text-start">
        <span>{formatDateES(date)}</span>
      </div>
    </>
  );
};
