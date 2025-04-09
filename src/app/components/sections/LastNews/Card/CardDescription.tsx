interface CardDescriptionProps {
  description: string;
}

const CardDescription = ({ description }: CardDescriptionProps) => {
  return (
    <div>
      <p className=" text-sm mb-4 line-clamp-3 font-bold">{description}</p>
    </div>
  );
};

export default CardDescription;
