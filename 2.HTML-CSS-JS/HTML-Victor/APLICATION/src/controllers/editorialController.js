//encargado de gestionar las solicitudes
import editorialService from "../services/editorialService.js";

const getEditorial = async (req, res) => {
    const data = await editorialService.getEditorial();
    res.json(data);
};
const getEditorialById = async (req, res) => {
    const id = req.params.id;
    const data = await editorialService.getEditorialById(id);
    res.json(data);
};
const createEditorial = async (req, res) => {
    const document = req.body;
    const data = await editorialService.createEditorial(document);
    res.json(data);
};
const updateEditorialById = async (req, res) => {
    const document = req.body;
    const id = req.params.id;
    const data = await editorialService.updateEditorialById(document, id);
    res.json(data);
};
const deleteEditorialById = async (req, res) => {
    const id = req.params.id;
    const data = await editorialService.deleteEditorialById(id);
    res.json(data);
};

export default {
    getEditorial,
    getEditorialById,
    createEditorial,
    deleteEditorialById,
    updateEditorialById
};