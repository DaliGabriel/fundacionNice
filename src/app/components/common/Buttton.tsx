import { ButtonProps } from "../../../lib/types/button";
const Button = ({ text, className, disabled }: ButtonProps) => {
  return (
    <button
      className={`bg-[#83b8e4] text-[#0A2355] text-lg md:text-xl font-semibold  md:py-1 px-8 md:px-10 rounded-md hover:bg-[#64B5F6] transition-colors duration-300 cursor-pointer ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
