//encargado de gestionar/enlazar los datos

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getBook = async () => {
  const data = await prisma.libro.findMany();
  return data;
};
const getBookByID = async (id) => {
  const data = prisma.libro.findUnique({
    where: { id: parseInt(id) },
  });
  return data;
};
const createBook = async (document) => {
  const data = await prisma.libro.create({
    data: {
      nombre: document.nombre,
      publicacion: document.publicacion,
      precio: document.precio,
      editorialId: document.editorialId,
    },
  });
  return data;
};
const updateBookByID = async (document, id) => {
  const data = {}; //await dataAccess.updateById("libro", document, id);
  return data;
};
const deleteBookByID = async (id) => {
  const data = {}; //await dataAccess.deleteById("libro", id);
  return data;
};

export default {
  getBook,
  getBookByID,
  createBook,
  deleteBookByID,
  updateBookByID,
};
