/**
 * Repository for managing administrator users in the application.
 * Provides operations for admin authentication and management.
 *
 * @module AdminRepository
 */

import prisma from "../../db";

/**
 * Finds an administrator user by their username.
 *
 * @param {string} username - The username to search for
 * @returns {Promise<Admin | null>} The found admin user or null if not found
 *
 * @description
 * This method is primarily used during the authentication process
 * to verify admin credentials.
 */
export const findByUsername = async (username: string) => {
  return await prisma.admin.findUnique({
    where: { username },
  });
};
