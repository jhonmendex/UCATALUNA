//encargado de gestionar/enlazar los datos
import DataAccess from "../db.js";
const dataAccess = new DataAccess();

(async () => {
  await dataAccess.connect();
})();

const getAuthor = async () => {
  const data = await dataAccess.findAll("autor");
  return data;
};
const getAuthorByID = async (id) => {
  const data = await dataAccess.findById("autor", id);
  return data;
};
const createAuthor = async (document) => {
  const data = await dataAccess.save("autor", document);
  return data;
};
const updateAuthorByID = async (document, id) => {
  const data = await dataAccess.updateById("autor", document, id);
  return data;
};
const deleteAuthorByID = async (id) => {
  const data = await dataAccess.deleteById("autor", id);
  return data;
};

export default {
  getAuthor,
  getAuthorByID,
  createAuthor,
  deleteAuthorByID,
  updateAuthorByID,
};
