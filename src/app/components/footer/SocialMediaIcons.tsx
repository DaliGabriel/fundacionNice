import Image from "next/image";

interface SocialMediaIconProps {
  type: "facebook" | "instagram";
  className?: string;
}

export const SocialMediaIcon = ({
  type,
  className = "",
}: SocialMediaIconProps) => {
  const iconPath =
    type === "facebook" ? "/logos/LogoFb.svg" : "/logos/LogoIg.svg";

  return (
    <div className={`relative w-7 h-7 ${className}`}>
      <Image
        src={iconPath}
        alt={`${type} icon`}
        fill
        className="object-contain"
      />
    </div>
  );
};
