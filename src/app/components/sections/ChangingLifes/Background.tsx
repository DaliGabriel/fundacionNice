import Image from "next/image";

const Background = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-[1]">
      <Image
        src="/divs/Div2.svg"
        alt="Background decoration"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};

export default Background;
