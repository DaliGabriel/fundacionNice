/**
 * Repository for managing blog posts in the application.
 * Provides CRUD operations and specialized queries for posts.
 *
 * @module PostRepository
 */

import prisma from "../../db";
import { PostFormData } from "../../types/postForm";
import { Category } from "../../../generated/prisma";

/**
 * Creates a new blog post in the database.
 *
 * @param {PostFormData} postData - The data for the new post
 * @returns {Promise<Post>} The created post
 *
 * @throws {PrismaError} If the post creation fails
 */
export const create = async (postData: PostFormData) => {
  return await prisma.post.create({
    data: {
      title: postData.title,
      cover: postData.cover,
      category: postData.category as Category,
      paragraph1: postData.paragraph1,
      image1: postData.image1 || null,
      image2: postData.image2 || null,
      paragraph2: postData.paragraph2 || null,
      image3: postData.image3 || null,
      image4: postData.image4 || null,
      buttonLink: postData.buttonLink || null,
      published: postData.published || false,
    },
  });
};

/**
 * Updates an existing blog post in the database.
 *
 * @param {number} id - The ID of the post to update
 * @param {PostFormData} postData - The updated post data
 * @returns {Promise<Post>} The updated post
 *
 * @throws {PrismaError} If the post update fails
 */
export const update = async (id: number, postData: PostFormData) => {
  return await prisma.post.update({
    where: { id },
    data: {
      title: postData.title,
      cover: postData.cover,
      category: postData.category as Category,
      paragraph1: postData.paragraph1,
      image1: postData.image1 || null,
      image2: postData.image2 || null,
      paragraph2: postData.paragraph2 || null,
      image3: postData.image3 || null,
      image4: postData.image4 || null,
      buttonLink: postData.buttonLink || null,
      published: postData.published || false,
    },
  });
};

/**
 * Deletes a blog post from the database.
 *
 * @param {number} id - The ID of the post to delete
 * @returns {Promise<Post>} The deleted post
 *
 * @throws {PrismaError} If the post deletion fails
 */
export const remove = async (id: number) => {
  return await prisma.post.delete({
    where: { id },
  });
};

/**
 * Finds a blog post by its ID.
 *
 * @param {number} id - The ID of the post to find
 * @returns {Promise<Post | null>} The found post or null if not found
 */
export const findById = async (id: number) => {
  return await prisma.post.findFirst({
    where: { id },
  });
};

/**
 * Retrieves blog posts from the database with optional filtering.
 *
 * @param {string | null} filter - Optional filter parameter to filter posts by category
 * @returns {Promise<Post[]>} Array of posts, filtered if a filter is provided
 */
export const findAll = async (filter: string | null = null) => {
  const whereClause = filter
    ? {
        category: {
          equals: (() => {
            switch (filter.toLowerCase()) {
              case "villa":
                return Category.VILLA_DE_LOS_NINOS;
              case "scholas":
                return Category.SCHOLAS_OCURRENTES;
              case "ludica":
                return Category.LUDICA;
              case "teleton":
                return Category.FUNDACION_TELETON;
              case "1111":
                return Category.FUNDACION_1111;
              default:
                return undefined;
            }
          })(),
        },
      }
    : {};

  return await prisma.post.findMany({
    where: whereClause,
    orderBy: {
      updatedAt: "desc",
    },
  });
};

/**
 * Retrieves the three most recently published blog posts.
 *
 * @returns {Promise<Post[]>} Array of the three most recent published posts
 */
export const findLastThreePublished = async () => {
  return await prisma.post.findMany({
    where: {
      published: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
    take: 3,
  });
};

/**
 * Retrieves blog posts from the database with optional filtering.
 *
 * @param {string | null} filter - Optional filter parameter to filter posts by category
 * @returns {Promise<Post[]>} Array of filtered posts
 */
export const findFilteredPosts = async (filter: string | null = null) => {
  const whereClause = filter
    ? {
        category: {
          equals: (() => {
            switch (filter.toLowerCase()) {
              case "villa":
                return Category.VILLA_DE_LOS_NINOS;
              case "scholas":
                return Category.SCHOLAS_OCURRENTES;
              case "ludica":
                return Category.LUDICA;
              case "teleton":
                return Category.FUNDACION_TELETON;
              case "1111":
                return Category.FUNDACION_1111;
              default:
                return undefined;
            }
          })(),
        },
      }
    : {};

  return await prisma.post.findMany({
    where: whereClause,
    orderBy: {
      updatedAt: "desc",
    },
  });
};
