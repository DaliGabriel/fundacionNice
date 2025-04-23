import Image from "next/image";

const WaveBottom = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
      <Image
        src="/divs/Wave_Down.svg"
        alt="Wave bottom decoration"
        width={1920}
        height={56}
        className="w-full"
      />
    </div>
  );
};

export default WaveBottom;
