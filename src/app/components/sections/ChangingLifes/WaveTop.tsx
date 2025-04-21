import Image from "next/image";

const WaveTop = () => {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden z-20">
      <Image
        src="/divs/Wave_Up.svg"
        alt="Wave top decoration"
        width={1920}
        height={50}
        className="w-full"
        priority
      />
    </div>
  );
};

export default WaveTop;
