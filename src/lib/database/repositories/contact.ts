/**
 * Repository for managing contact messages in the application.
 * Provides database operations for contact messages.
 *
 * @module ContactRepository
 */

import prisma from "../../db";
import { ContactFormData } from "../../types/contactForm";

/**
 * Creates a new contact message in the database.
 *
 * @param {ContactFormData} messageData - The data for the new contact message
 * @returns {Promise<Message>} The created message
 *
 * @throws {PrismaError} If the message creation fails
 */
export const create = async (messageData: ContactFormData) => {
  return await prisma.message.create({
    data: {
      name: messageData.name,
      email: messageData.email,
      subject: messageData.subject,
      message: messageData.message || null,
    },
  });
};

/**
 * Retrieves all contact messages from the database.
 *
 * @returns {Promise<Message[]>} Array of all messages
 */
export const findAll = async () => {
  return await prisma.message.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

/**
 * Finds a contact message by its ID.
 *
 * @param {number} id - The ID of the message to find
 * @returns {Promise<Message | null>} The found message or null if not found
 */
export const findById = async (id: number) => {
  return await prisma.message.findFirst({
    where: { id },
  });
};

/**
 * Updates the read status of a message.
 *
 * @param {number} id - The ID of the message to update
 * @param {boolean} read - The new read status
 * @returns {Promise<Message>} The updated message
 */
export const updateReadStatus = async (id: number, read: boolean) => {
  return await prisma.message.update({
    where: { id },
    data: { read },
  });
};

/**
 * Deletes a contact message from the database.
 *
 * @param {number} id - The ID of the message to delete
 * @returns {Promise<Message>} The deleted message
 */
export const remove = async (id: number) => {
  return await prisma.message.delete({
    where: { id },
  });
};
