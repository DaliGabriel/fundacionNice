interface ButtonProps {
  setIsModalOpen: (isModalOpen: boolean) => void;
}

const Button = ({ setIsModalOpen }: ButtonProps) => {
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
      >
        Create New Post
      </button>
    </>
  );
};

export default Button;
