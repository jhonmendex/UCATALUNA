//encargado de gestionar las solicitudes
import userService from "../services/userService.js";

const getUser = async (req, res) => {
  const data = await userService.getUser();
  res.json(data);
};
const getUserByID = async (req, res) => {
  const data = await userService.getUserByID(req.params.id);
  res.json(data);
};
const createUser = async (req, res) => {
  const document = req.body;
  const data = await userService.createUser(document);
  res.json(data);
};

const updateUserByID = async (req, res) => {
  const document = req.body;
  const id = req.params.id;
  const data = await userService.updateUserByID(document, id);
  res.json(data);
};

const deleteUserByID = async (req, res) => {
  const data = await userService.deleteUserByID(req.params.id);
  res.json(data);
};

export default {
  getUser,
  getUserByID,
  createUser,
  deleteUserByID,
  updateUserByID,
};
