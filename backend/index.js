const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();
const port = 3000;

const prisma = new PrismaClient();

app.use(cors());

app.get("/", (req, res) => res.redirect("/todos"));

app.get("/todos", async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const todos = await prisma.todo.findMany();
  return res.json(todos);

  // return res.status(500).json({ message: 'Internal Server Error From Server' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
