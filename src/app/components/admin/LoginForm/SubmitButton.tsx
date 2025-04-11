interface SubmitButtonProps {
  isLoading?: boolean;
}

export const SubmitButton = ({ isLoading }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="group 
      relative 
      w-full 
      flex 
      justify-center 
      py-2 
      px-4 
      border 
      border-transparent 
      text-sm font-medium 
      rounded-md 
      text-white 
      bg-[#00295c] 
      hover:bg-[#00295c]/90 
      focus:outline-none 
      focus:ring-2 focus:ring-offset-2 
      focus:ring-[#00295c] 
      cursor-pointer"
    >
      {isLoading ? "Signing in..." : "Sign in"}
    </button>
  );
};
