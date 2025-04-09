interface CardDateProps {
  date: string;
}

const CardDate = ({ date }: CardDateProps) => {
  return (
    <div>
      <span className="text-gray-500 text-sm">{date}</span>
    </div>
  );
};

export default CardDate;
