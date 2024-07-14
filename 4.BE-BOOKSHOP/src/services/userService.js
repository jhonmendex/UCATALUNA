//encargado de gestionar/enlazar los datos
import DataAccess from "../db.js";
const dataAccess = new DataAccess();

(async () => {
  await dataAccess.connect();
})();

const getUser = async () => {
  const data = await dataAccess.findAll("usuario");
  return data;
};
const getUserByID = async (id) => {
  const data = await dataAccess.findById("usuario", id);
  return data;
};
const createUser = async (document) => {
  const data = await dataAccess.save("usuario", document);
  return data;
};
const updateUserByID = async (document, id) => {
  const data = await dataAccess.updateById("usuario", document, id);
  return data;
};
const deleteUserByID = async (id) => {
  const data = await dataAccess.deleteById("usuario", id);
  return data;
};

export default {
  getUser,
  getUserByID,
  createUser,
  deleteUserByID,
  updateUserByID,
};
