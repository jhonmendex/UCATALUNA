//encargado de gestionar las solicitudes
import userService from "../services/userService.js";

const getUser = async (req, res) => {
    const data = await userService.getUser();
    res.json(data);
};
const getUserById = async (req, res) => {
    const id = req.params.id;
    const data = await userService.getUserById(id);
    res.json(data);
};
const createUser = async (req, res) => {
    const document = req.body;
    const data = await userService.createUser(document);
    res.json(data);
};
const updateUserById = async (req, res) => {
    const document = req.body;
    const id = req.params.id;
    const data = await userService.updateUserById(document, id);
    res.json(data);
};
const deleteUserById = async (req, res) => {
    const id = req.params.id;
    const data = await userService.deleteUserById(id);
    res.json(data);
};

export default {
    getUser,
    getUserById,
    createUser,
    deleteUserById,
    updateUserById
};