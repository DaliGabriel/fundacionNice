import { CardCategoryProps } from "../../../../../lib/types/category";
import { categories } from "../../../../../lib/constants/news";

const CardCategory = ({ category }: CardCategoryProps) => {
  return (
    <div>
      <span className="text-[#FDB913] uppercase text-sm font-bold">
        {categories.find((c) => c.value === category)?.name}
      </span>
    </div>
  );
};

export default CardCategory;
