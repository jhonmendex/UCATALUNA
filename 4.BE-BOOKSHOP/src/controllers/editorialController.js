//encargado de gestionar las solicitudes
import editorialService from "../services/editorialService.js";

const getEditorial = async (req, res) => {
  const data = await editorialService.getEditorial();
  res.json(data);
};
const getEditorialByID = async (req, res) => {
  const data = await editorialService.getEditorialByID(req.params.id);
  res.json(data);
};
const createEditorial = async (req, res) => {
  const document = req.body;
  const data = await editorialService.createEditorial(document);
  res.json(data);
};

const updateEditorialByID = async (req, res) => {
  const document = req.body;
  const id = req.params.id;
  const data = await editorialService.updateEditorialByID(document, id);
  res.json(data);
};

const deleteEditorialByID = async (req, res) => {
  const data = await editorialService.deleteEditorialByID(req.params.id);
  res.json(data);
};

export default {
  getEditorial,
  getEditorialByID,
  createEditorial,
  deleteEditorialByID,
  updateEditorialByID,
};
