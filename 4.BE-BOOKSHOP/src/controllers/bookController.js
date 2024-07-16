//encargado de gestionar las solicitudes
import bookService from "../services/bookService.js";

const getbook = async (req, res) => {
  const data = await bookService.getBook();
  res.json(data);
};
const getbookByID = async (req, res) => {
  const data = await bookService.getBookByID(req.params.id);
  res.json(data);
};
const createbook = async (req, res) => {
  const document = req.body;
  const data = await bookService.createBook(document);
  res.json(data);
};

const updatebookByID = async (req, res) => {
  const document = req.body;
  const id = req.params.id;
  const data = await bookService.updateBookByID(document, id);
  res.json(data);
};

const deletebookByID = async (req, res) => {
  const data = await bookService.deleteBookByID(req.params.id);
  res.json(data);
};

export default {
  getbook,
  getbookByID,
  createbook,
  deletebookByID,
  updatebookByID,
};
