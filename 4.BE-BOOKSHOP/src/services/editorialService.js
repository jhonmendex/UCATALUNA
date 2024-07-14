//encargado de gestionar/enlazar los datos
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getEditorial = async () => {
  const data = prisma.editorial.findMany();
  return data;
};
const getEditorialByID = async (id) => {
  const data = prisma.editorial.findUnique({
    where: { id: parseInt(id) },
  });
  return data;
};
const createEditorial = async (document) => {
  const data = prisma.editorial.create({
    data: {
      nombre: document.nombre,
    },
  });
  return data;
};
const updateEditorialByID = async (document, id) => {
  const data = prisma.editorial.update({
    where: { id: parseInt(id) },
    data: {
      nombre: document.nombre,
    },
  });
  return data;
};
const deleteEditorialByID = async (id) => {
  const data = prisma.editorial.delete({
    where: { id: parseInt(id) },
  });
  return data;
};

export default {
  getEditorial,
  getEditorialByID,
  createEditorial,
  deleteEditorialByID,
  updateEditorialByID,
};
