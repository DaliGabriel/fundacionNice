import Title from "../../../common/Title";
import Button from "../../../common/Buttton";
import Text from "./Text";
import YellowCurvedExtension from "./YellowCurvedExtension";

const ContentSection = () => {
  return (
    <>
      <div className="relative h-[400px] md:h-[400px] bg-[#FFA726] md:p-12 flex items-center">
        <YellowCurvedExtension />
        <div className="max-w-xl mx-12">
          <Title
            title="Cambiando vidas"
            className="text-2xl md:text-3xl  text-[#00295c] mb-12"
          />
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
