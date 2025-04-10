import { FormCheckboxProps } from "../../../../lib/types/postForm";

export const FormCheckbox = ({
  label,
  id,
  checked,
  onChange,
}: FormCheckboxProps) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
    </div>
  );
};
