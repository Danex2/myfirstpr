import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const { user, name, language, description, repo } = req.body;

  const response = await prisma.project.create({
    data: {
      name,
      user,
      language,
      description,
      repo,
    },
  });

  res.json(response);
};
