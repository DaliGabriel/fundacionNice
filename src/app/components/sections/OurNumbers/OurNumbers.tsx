import { stats } from "../../../constants/ourNumbers";
import StatCard from "./StatCard";
import Title from "./Title";

const OurNumbers = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <Title />
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
