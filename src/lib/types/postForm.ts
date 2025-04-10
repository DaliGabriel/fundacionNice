import { ChangeEvent } from "react";

export interface PostFormData {
  id?: number;
  title: string;
  cover: string;
  category: string;
  paragraph1: string;
  image1: string;
  image2: string;
  paragraph2: string;
  image3: string;
  image4: string;
  buttonLink: string;
  published: boolean;
}

export interface PostFormProps {
  onSubmit: (data: PostFormData) => Promise<void>;
  initialData?: PostFormData;
}

export interface Option {
  value: string;
  label: string;
}

export interface FormSelectProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  required?: boolean;
}

export interface FormInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: "text" | "textarea";
  required?: boolean;
  rows?: number;
}

export interface FormCheckboxProps {
  label: string;
  id: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface PostFormFieldsProps {
  formData: PostFormData;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

export interface SubmitButtonProps {
  isLoading: boolean;
  initialData?: PostFormData;
}
