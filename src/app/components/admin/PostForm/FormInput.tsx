import { FormInputProps } from "../../../../lib/types/postForm";

export const FormInput = ({
  label,
  id,
  value,
  onChange,
  type = "text",
  required = false,
  rows = 1,
}: FormInputProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          rows={rows}
          className="w-full px-3 py-2 border rounded-md"
          required={required}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded-md"
          required={required}
        />
      )}
    </div>
  );
};
