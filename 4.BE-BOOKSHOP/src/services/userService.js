//encargado de gestionar/enlazar los datos
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getUser = async () => {
  const data = prisma.usuario.findMany();
  return data;
};
const getUserByID = async (id) => {
  const data = prisma.usuario.findUnique({ where: { id: parseInt(id) } });
  return data;
};
const createUser = async (document) => {
  const data = prisma.usuario.create({
    data: {
      nombre: document.nombre,
      correo: document.correo,
      password: document.password,
    },
  });
  return data;
};
const updateUserByID = async (document, id) => {
  const data = prisma.usuario.update({
    where: { id: parseInt(id) },
    data: {
      nombre: document.nombre,
      correo: document.email,
      password: document.password,
    },
  });
  return data;
};
const deleteUserByID = async (id) => {
  const data = {}; //await dataAccess.deleteById("usuario", id);
  return data;
};

export default {
  getUser,
  getUserByID,
  createUser,
  deleteUserByID,
  updateUserByID,
};
