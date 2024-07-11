//encargado de gestionar las solicitudes
import bookService from "../services/bookService.js";

const getbook = async (req, res) => {
  const data = await bookService.getBook();
  res.json(data);
};
const getbookByID = async (req, res) => {
  const data = await bookService.getbookByID(req.params.id);
  res.json(data);
};
const createbook = async (req, res) => {
  const document = req.body;
  const data = await bookService.createbook(document);
  res.json(data);
};

const updatebookByID = async (req, res) => {
  const document = req.body;
  const id = req.params.id;
  const data = await bookService.updatebookByID(document, id);
  res.json(data);
};

const deletebookByID = async (req, res) => {
  const data = await bookService.deletebookByID(req.params.id);
  res.json(data);
};

export default {
  getbook,
  getbookByID,
  createbook,
  deletebookByID,
  updatebookByID,
};
