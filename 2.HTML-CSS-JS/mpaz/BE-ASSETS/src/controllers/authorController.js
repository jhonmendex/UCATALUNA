//encargado de gestionar las solicitudes
import authorService from "../services/authorService.js";

const getAuthor = async (req, res) => {
  const data = await authorService.getAuthor();
  res.json(data);
};
const getAuthorByID = async (req, res) => {
  const data = await authorService.getAuthorByID(req.params.id);
  res.json(data);
};
const createAuthor = async (req, res) => {
  const document = req.body;
  const data = await authorService.createAuthor(document);
  res.json(data);
};

const updateAuthorByID = async (req, res) => {
  const document = req.body;
  const id = req.params.id;
  const data = await authorService.updateAuthorByID(document, id);
  res.json(data);
};

const deleteAuthorByID = async (req, res) => {
  const data = await authorService.deleteAuthorByID(req.params.id);
  res.json(data);
};

export default {
  getAuthor,
  getAuthorByID,
  createAuthor,
  deleteAuthorByID,
  updateAuthorByID,
};
