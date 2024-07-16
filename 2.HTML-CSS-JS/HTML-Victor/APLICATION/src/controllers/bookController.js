//encargado de gestionar las solicitudes
import bookService from "../services/bookService.js";

const getBook = async (req, res) => {
    const data = await bookService.getBook();
    res.json(data);
};
const getBookById = async (req, res) => {
    const id = req.params.id;
    const data = await bookService.getBookById(id);
    res.json(data);
};
const createBook = async (req, res) => {
    const document = req.body;
    const data = await bookService.createBook(document);
    res.json(data);
};
const updateBookById = async (req, res) => {
    const document = req.body;
    const id = req.params.id;
    const data = await bookService.updateBookById(document, id);
    res.json(data);
};
const deleteBookById = async (req, res) => {
    const id = req.params.id;
    const data = await bookService.deleteBookById(id);
    res.json(data);
};

export default {
    getBook,
    getBookById,
    createBook,
    deleteBookById,
    updateBookById
};