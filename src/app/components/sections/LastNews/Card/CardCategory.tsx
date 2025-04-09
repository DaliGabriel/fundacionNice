interface CardCategoryProps {
  category: string;
}

const CardCategory = ({ category }: CardCategoryProps) => {
  return (
    <div>
      <span className="text-[#FDB913] uppercase text-sm font-bold">
        {category}
      </span>
    </div>
  );
};

export default CardCategory;
