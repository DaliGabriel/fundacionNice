import Image from "next/image";

const BackgroundPattern = ({ pattern }: { pattern: string }) => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Image
        src={pattern}
        alt="Background pattern"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};

export default BackgroundPattern;
