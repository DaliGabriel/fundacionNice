import { TitleProps } from "../../../lib/types/common";

const Title = ({ title, className = "" }: TitleProps) => {
  return <h2 className={`font-bold text-center ${className}`}>{title}</h2>;
};

export default Title;
