import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const { user, name, language, description, tags, repo } = req.body;

  const res = await prisma.project.create({
    data: {
      name,
      user,
      language,
      description,
      tags,
      repo,
    },
  });

  res.status(201).json(res);
};
