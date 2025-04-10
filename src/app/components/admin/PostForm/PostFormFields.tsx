import { categories } from "@/lib/constants/news";
import { PostFormFieldsProps } from "../../../../lib/types/postForm";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";
import { FormCheckbox } from "./FormCheckbox";

export const PostFormFields = ({
  formData,
  handleChange,
}: PostFormFieldsProps) => {
  return (
    <>
      <FormInput
        label="Title"
        id="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <FormInput
        label="Cover Image URL"
        id="cover"
        value={formData.cover}
        onChange={handleChange}
        required
      />

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

      <FormInput
        label="First Image URL"
        id="image1"
        value={formData.image1}
        onChange={handleChange}
      />

      <FormInput
        label="Second Image URL"
        id="image2"
        value={formData.image2}
        onChange={handleChange}
      />

      <FormInput
        label="Second Paragraph"
        id="paragraph2"
        value={formData.paragraph2}
        onChange={handleChange}
        type="textarea"
        rows={5}
      />

      <FormInput
        label="Third Image URL"
        id="image3"
        value={formData.image3}
        onChange={handleChange}
      />

      <FormInput
        label="Fourth Image URL"
        id="image4"
        value={formData.image4}
        onChange={handleChange}
      />

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
