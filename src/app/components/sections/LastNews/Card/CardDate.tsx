import { CardDateProps } from "../../../../../lib/types/card";

const CardDate = ({ date }: CardDateProps) => {
  return (
    <div>
      <span className="text-gray-500 dark:text-white">{date}</span>
    </div>
  );
};

export default CardDate;
