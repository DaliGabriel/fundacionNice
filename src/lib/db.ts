import { PrismaClient as PostgresClient } from "../generated/prisma";

const globalForPrisma = globalThis as unknown as {
  prisma: PostgresClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PostgresClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
