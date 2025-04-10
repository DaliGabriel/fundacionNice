import prisma from "../../db";

export const findByUsername = async (username: string) => {
  return await prisma.admin.findUnique({
    where: { username },
  });
};
