import { stats } from "../../../../lib/constants/ourNumbers";
import Title from "../../common/Title";
import StatCard from "./StatCard";

const OurNumbers = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <Title
          title="En cifras"
          className="text-3xl md:text-4xl  text-[#00295c] mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
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
