"use client";

import { usePublicNumbers } from "../../../../lib/hooks/useNumbers";
import Title from "../../common/Title";
import ErrorNumbers from "./ErrorNumbers";
import LoadingNumbers from "./LoadingNumbers";
import StatCard from "./StatCard";

const OurNumbers = () => {
  const { numbers, error, isLoading } = usePublicNumbers();

  if (error) {
    return <ErrorNumbers />;
  }

  if (isLoading) {
    return <LoadingNumbers />;
  }

  return (
    <section className="py-16 bg-[#f2f2f2]">
      <div className="container mx-auto">
        <Title
          title="En cifras"
          className="text-3xl md:text-4xl text-[#00295c] mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {numbers.map((stat) => (
            <StatCard
              key={stat.id}
              icon={stat.icon}
              number={stat.number}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurNumbers;
