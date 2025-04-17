import { ActionsProps } from "../../../../lib/types/alert";

export const Actions = ({ type, onClose, onConfirm }: ActionsProps) => {
  return (
    <div className="flex justify-center gap-3">
      {type === "confirm" ? (
        <>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 cursor-pointer"
          >
            Cancel
          </button>
        </>
      ) : (
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
        >
          OK
        </button>
      )}
    </div>
  );
};
