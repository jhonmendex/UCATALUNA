//encargado de gestionar las solicitudes
import authorService from "../services/authorService.js";

const getAuthor = async (req, res) => {
    const data = await authorService.getAuthor();
    res.json(data);
};
const getAuthorById = async (req, res) => {
    const id = req.params.id;
    const data = await authorService.getAuthorById(id);
    res.json(data);
};
const createAuthor = async (req, res) => {
    const document = req.body;
    const data = await authorService.createAuthor(document);
    res.json(data);
};
const updateAuthorById = async (req, res) => {
    const document = req.body;
    const id = req.params.id;
    const data = await authorService.updateAuthorById(document, id);
    res.json(data);
};
const deleteAuthorById = async (req, res) => {
    const id = req.params.id;
    const data = await authorService.deleteAuthorById(id);
    res.json(data);
};

export default {
    getAuthor,
    getAuthorById,
    createAuthor,
    deleteAuthorById,
    updateAuthorById
};