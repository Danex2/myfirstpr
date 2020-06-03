import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const response = await prisma.project.findMany();
  console.log(response);
  res.status(201).json(response);
};
