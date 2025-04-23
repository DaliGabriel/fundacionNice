import { CardTitleProps } from "../../../../../lib/types/card";

const CardTitle = ({ title }: CardTitleProps) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-[#00295c] dark:text-[#00295c] mb-3">
        {title}
      </h3>
    </div>
  );
};

export default CardTitle;
