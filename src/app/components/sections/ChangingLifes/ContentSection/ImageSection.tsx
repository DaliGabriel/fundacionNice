import Image from "next/image";

const ImageSection = () => {
  return (
    <>
      <div className="relative h-[300px] md:h-[400px] w-full">
        <Image
          src="/changingLifePhoto.jpg"
          alt="Changing lives at Fundación Nice"
          fill
          className="object-cover"
          priority
        />
      </div>
    </>
  );
};

export default ImageSection;
