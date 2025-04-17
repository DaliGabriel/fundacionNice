import { ContentProps } from "../../../../lib/types/alert";

export const Content = ({ title, message }: ContentProps) => {
  return (
    <>
      <h3 className="text-lg font-semibold text-center mb-2">{title}</h3>
      <p className="text-gray-600 text-center mb-6">{message}</p>
    </>
  );
};
