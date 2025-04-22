"use client";

import Image from "next/image";
import { StatCardProps } from "../../../../lib/types/ourNumbers";
import { useAnimateNumber } from "../../../../lib/utils/animateNumber";
import { useIntersectionObserver } from "../../../../lib/hooks/useIntersectionObserver";

const StatCard = ({ icon, number, description }: StatCardProps) => {
  const { isVisible, elementRef } = useIntersectionObserver();
  const animatedNumber = useAnimateNumber(isVisible ? number.toString() : "0");

  return (
    <div ref={elementRef} className="flex flex-col items-center text-center">
      <div className="w-40 h-40 mb-4">
        <Image
          src={icon}
          alt={description}
          width={160}
          height={160}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-5xl font-bold text-[#FDB913] mb-2">
        {animatedNumber}
      </h3>
      <p className="text-[#002E6D] font-bold uppercase text-md max-w-[200px] leading-tight">
        {description}
      </p>
    </div>
  );
};

export default StatCard;
