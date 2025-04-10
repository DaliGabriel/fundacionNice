import prisma from "../../db";
import { PostFormData } from "../../types/postForm";
import { Category } from "../../../generated/prisma";

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

export const remove = async (id: number) => {
  return await prisma.post.delete({
    where: { id },
  });
};

export const findById = async (id: number) => {
  return await prisma.post.findUnique({
    where: { id },
  });
};

export const findAll = async () => {
  return await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
