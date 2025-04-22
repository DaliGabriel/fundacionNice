import Image from "next/image";

interface BackgroundPatternProps {
  pattern: string; // Path to the SVG file
}

const BackgroundPattern = ({ pattern }: BackgroundPatternProps) => {
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
