//encargado de gestionar/enlazar los datos
import DataAccess from "../db.js";
const dataAccess = new DataAccess();

(async () => {
  await dataAccess.connect();
})();

const getEditorial = async () => {
  const data = await dataAccess.findAll("editorial");
  return data;
};
const getEditorialByID = async (id) => {
  const data = await dataAccess.findById("editorial", id);
  return data;
};
const createEditorial = async (document) => {
  const data = await dataAccess.save("editorial", document);
  return data;
};
const updateEditorialByID = async (document, id) => {
  const data = await dataAccess.updateById("editorial", document, id);
  return data;
};
const deleteEditorialByID = async (id) => {
  const data = await dataAccess.deleteById("editorial", id);
  return data;
};

export default {
  getEditorial,
  getEditorialByID,
  createEditorial,
  deleteEditorialByID,
  updateEditorialByID,
};
