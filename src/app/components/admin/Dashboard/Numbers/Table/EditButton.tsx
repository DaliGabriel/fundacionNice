interface EditButtonProps {
  onClick: () => void;
}

export const EditButton = ({ onClick }: EditButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-blue-600 hover:text-blue-900 cursor-pointer"
    >
      Edit<span className="sr-only">, number</span>
    </button>
  );
};
