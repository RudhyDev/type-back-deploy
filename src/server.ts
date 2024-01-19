import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import { z } from "zod";

const app = fastify();
const prisma = new PrismaClient();

app.get("/users", async (request, reply) => {
  const allUsers = await prisma.user.findMany();
  return reply.send(allUsers);
});

app.post("/user", async (request, reply) => {
  const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  const { name, email } = createUserSchema.parse(request.body);

  await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  return reply.status(201).send({ message: "User created" });
});

app
  .listen({
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 4444,
  })
  .then(() => {
    console.log(`Server is running! 🚀🚀🚀🚀`);
  });
