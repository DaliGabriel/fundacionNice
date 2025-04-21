import Image from "next/image";

const Background = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Image
        src="/divs/Div1.svg"
        alt="Background decoration"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};

export default Background;
