interface CardDescriptionProps {
  description: string;
}

const CardDescription = ({ description }: CardDescriptionProps) => {
  return (
    <div>
      <p className="text-sm mb-4 line-clamp-3 font-bold text-black dark:text-white">
        {description}
      </p>
    </div>
  );
};

export default CardDescription;
