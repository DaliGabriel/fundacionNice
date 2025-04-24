import { formatDateES } from "@/lib/utils/dateFormat";
import { BlogHeaderProps } from "../../../lib/types/blog";



export const BlogHeader = ({ title, date }: BlogHeaderProps) => {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-[#0A2355] text-start">
        {title}
      </h1>

      <div className="text-[#F7A81B] mb-6 sm:mb-8 text-base sm:text-lg text-start">
        <span>{formatDateES(date)}</span>
      </div>
    </>
  );
};
