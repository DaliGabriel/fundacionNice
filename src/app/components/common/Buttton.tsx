import { ButtonProps } from "../../../lib/types/button";
const Button = ({ text, className, disabled }: ButtonProps) => {
  return (
    <button
      className={`bg-[#90CAF9] text-[#0A2355] text-lg md:text-xl font-semibold py-2 md:py-3 px-8 md:px-10 rounded-full hover:bg-[#64B5F6] transition-colors duration-300 cursor-pointer ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
