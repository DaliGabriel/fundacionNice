import CloseButtonVector from "./CloseButtonIcon";
import { CloseModalButtonProps } from "../../../../lib/types/modal";

const CloseButton = ({ onClose }: CloseModalButtonProps) => {
  return (
    <button
      onClick={onClose}
      className="text-gray-500 hover:text-gray-700 cursor-pointer"
    >
      <CloseButtonVector />
    </button>
  );
};

export default CloseButton;
