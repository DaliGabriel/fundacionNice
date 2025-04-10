import { FormSelectProps } from "../../../../lib/types/postForm";

export const FormSelect = ({
  label,
  id,
  value,
  onChange,
  options,
  required = false,
}: FormSelectProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-md"
        required={required}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
