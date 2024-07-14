//encargado de gestionar/enlazar los datos

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAuthor = async () => {
  const data = await prisma.autor.findMany();
  return data;
};
const getAuthorByID = async (id) => {
  const data = await prisma.autor.findUnique({ where: { id: parseInt(id) } });
  return data;
};
const createAuthor = async (document) => {
  const data = await prisma.autor.create({
    data: {
      nombre: document.nombre,
    },
  });
  return data;
};
const updateAuthorByID = async (document, id) => {
  const data = await prisma.autor.update({
    where: { id: parseInt(id) },
    data: {
      nombre: document.nombre,
    },
  });
  return data;
};
const deleteAuthorByID = async (id) => {
  const data = await prisma.autor.delete({
    where: { id: parseInt(id) },
  });
  return data;
};

export default {
  getAuthor,
  getAuthorByID,
  createAuthor,
  deleteAuthorByID,
  updateAuthorByID,
};
