/**
 * Repository for managing statistics numbers in the application.
 * Provides CRUD operations for numbers data.
 *
 * @module NumbersRepository
 */

import prisma from "../../db";
import { Numbers } from "../../types/numbers";

/**
 * Retrieves all numbers from the database.
 *
 * @returns {Promise<Numbers[]>} Array of all numbers
 */
export const findAll = async () => {
  return await prisma.numbers.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

/**
 * Finds a number by its ID.
 *
 * @param {number} id - The ID of the number to find
 * @returns {Promise<Numbers | null>} The found number or null if not found
 */
export const findById = async (id: number) => {
  return await prisma.numbers.findFirst({
    where: { id },
  });
};

/**
 * Updates an existing number in the database.
 *
 * @param {number} id - The ID of the number to update
 * @param {Numbers} numberData - The updated number data
 * @returns {Promise<Numbers>} The updated number
 */
export const update = async (id: number, numberData: Partial<Numbers>) => {
  return await prisma.numbers.update({
    where: { id },
    data: {
      icon: numberData.icon,
      number: numberData.number,
      description: numberData.description,
    },
  });
};

/**
 * Deletes a number from the database.
 *
 * @param {number} id - The ID of the number to delete
 * @returns {Promise<void>}
 */
export const remove = async (id: number) => {
  await prisma.numbers.delete({
    where: { id },
  });
};
