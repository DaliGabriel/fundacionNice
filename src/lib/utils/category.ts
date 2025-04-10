import { Category } from "../../generated/prisma";

export const validateCategory = (category: string): Category => {
  if (!category) {
    throw new Error("Category is required");
  }

  if (!Object.values(Category).includes(category as Category)) {
    throw new Error("Invalid category value");
  }

  return category as Category;
};
