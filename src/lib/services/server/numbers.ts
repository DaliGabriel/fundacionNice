import { Numbers } from "../../types/numbers";
import {
  findAll,
  findById,
  update,
  remove,
} from "../../database/repositories/numbers";

/**
 * Retrieves all numbers from the database.
 *
 * @returns {Promise<Numbers[]>} Array of all numbers
 */
export const getAllNumbers = async () => {
  return await findAll();
};

/**
 * Retrieves a specific number by ID.
 *
 * @param {string} id - The ID of the number to retrieve
 * @returns {Promise<Numbers>} The requested number
 * @throws {Error} If the number is not found
 */
export const getNumberById = async (id: string) => {
  const number = await findById(parseInt(id));
  if (!number) {
    throw new Error("Number not found");
  }
  return number;
};

/**
 * Updates a number's information.
 *
 * @param {string} id - The ID of the number to update
 * @param {Partial<Numbers>} numberData - The data to update
 * @returns {Promise<Numbers>} The updated number
 * @throws {Error} If the number is not found
 */
export const updateNumber = async (
  id: string,
  numberData: Partial<Numbers>
) => {
  const existingNumber = await findById(parseInt(id));
  if (!existingNumber) {
    throw new Error("Number not found");
  }
  return await update(parseInt(id), numberData);
};

/**
 * Deletes a number from the database.
 *
 * @param {string} id - The ID of the number to delete
 * @throws {Error} If the number is not found
 */
export const deleteNumber = async (id: string) => {
  const existingNumber = await findById(parseInt(id));
  if (!existingNumber) {
    throw new Error("Number not found");
  }
  await remove(parseInt(id));
};
