import { categories } from "@/lib/constants/news";
import { PostFormFieldsProps } from "../../../../lib/types/postForm";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";
import { FormCheckbox } from "./FormCheckbox";
import { useState } from "react";
import Image from "next/image";
import { useFileUpload } from "../../../../lib/hooks/useFileUpload";

export const PostFormFields = ({ formData, handleChange }: PostFormFieldsProps) => {
  const [uploadingFields, setUploadingFields] = useState<
    Record<string, boolean>
  >({});

  const { uploadFile, error: uploadError } = useFileUpload();

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldId: string
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingFields((prev) => ({ ...prev, [fieldId]: true }));
      const url = await uploadFile(file);

      handleChange({
        target: {
          id: fieldId,
          value: url,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setUploadingFields((prev) => ({ ...prev, [fieldId]: false }));
    }
  };

  const renderImageUploader = (fieldId: string, label: string) => (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleImageUpload(e, fieldId)}
        className="w-full px-3 py-2 border rounded-md"
        disabled={uploadingFields[fieldId]}
      />
      {uploadingFields[fieldId] && (
        <div className="mt-2 text-blue-600">Uploading...</div>
      )}
      {formData[fieldId as keyof typeof formData] && (
        <div className="mt-2">
          <Image
            src={formData[fieldId as keyof typeof formData] as string}
            alt={`${label} preview`}
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />
        </div>
      )}
    </div>
  );

  return (
    <>
      {uploadError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          {uploadError}
        </div>
      )}

      <FormInput
        label="Title"
        id="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      {renderImageUploader("cover", "Cover Image")}

      <FormSelect
        label="Category"
        id="category"
        value={formData.category}
        onChange={handleChange}
        options={categories.map((cat) => ({
          value: cat.value,
          label: cat.name,
        }))}
        required
      />

      <FormInput
        label="First Paragraph"
        id="paragraph1"
        value={formData.paragraph1}
        onChange={handleChange}
        type="textarea"
        rows={5}
        required
      />

      {renderImageUploader("image1", "First Image")}
      {renderImageUploader("image2", "Second Image")}

      <FormInput
        label="Second Paragraph"
        id="paragraph2"
        value={formData.paragraph2}
        onChange={handleChange}
        type="textarea"
        rows={5}
      />

      {renderImageUploader("image3", "Third Image")}
      {renderImageUploader("image4", "Fourth Image")}

      <FormInput
        label="Button Link URL"
        id="buttonLink"
        value={formData.buttonLink}
        onChange={handleChange}
      />

      <FormCheckbox
        label="Publish immediately"
        id="published"
        checked={formData.published}
        onChange={handleChange}
      />
    </>
  );
};
