import { PrismaClient as PostgresClient } from "../generated/prisma";

export const postgres = new PostgresClient();
