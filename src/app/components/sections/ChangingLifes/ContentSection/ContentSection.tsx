import Button from "../../../common/Buttton";
import Text from "./Text";
import Title from "./Title";

const ContentSection = () => {
  return (
    <>
      <div className="relative h-[400px] md:h-[400px] bg-[#FFA726] md:p-12 flex items-center">
        {/* Yellow curved extension */}
        <div className="absolute left-0 top-0 h-full w-24 md:w-32 -translate-x-1/2">
          <div className="w-full h-full bg-[#FFA726] rounded-l-[100%]" />
        </div>
        <div className="max-w-xl mx-12">
          <Title />
          <Text />

          <div className="flex justify-center">
            <Button text="Ver video" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSection;
