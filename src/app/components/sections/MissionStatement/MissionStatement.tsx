import Content from "./Content";
import LeftDecoration from "./shapes/left/LeftDecoration";
import RightDecoration from "./shapes/rigth/RightDecoration";

const MissionStatement = () => {
  return (
    <section className="relative bg-[#0A2355] overflow-hidden py-12">
      <div className="hidden md:block">
        <LeftDecoration />
      </div>
      <Content />
      <div className="hidden md:block">
        <RightDecoration />
      </div>
    </section>
  );
};

export default MissionStatement;
