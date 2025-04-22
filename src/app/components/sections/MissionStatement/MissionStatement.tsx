import Content from "./Content";
import BackgroundPattern from "../../common/BackgroundPattern";

const MissionStatement = () => {
  return (
    <section className="relative overflow-hidden py-12">
      <BackgroundPattern pattern="/divs/Div1.svg" />
      <Content />
    </section>
  );
};

export default MissionStatement;
