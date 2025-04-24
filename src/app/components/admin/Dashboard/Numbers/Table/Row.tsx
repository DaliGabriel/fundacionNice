import Image from "next/image";
import { Numbers } from "@/lib/types/numbers";
import { EditButton } from "./EditButton";

interface RowProps {
  number: Numbers;
  onEdit: (number: Numbers) => void;
}

export const Row = ({ number, onEdit }: RowProps) => {
  return (
    <tr key={number.id}>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <Image
              width={40}
              height={40}
              className="h-10 w-10"
              src={number.icon}
              alt="Image icon"
            />
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {number.number}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {number.description}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {new Date(number.createdAt).toLocaleDateString()}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {new Date(number.updatedAt).toLocaleDateString()}
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
        <EditButton onClick={() => onEdit(number)} />
      </td>
    </tr>
  );
};
