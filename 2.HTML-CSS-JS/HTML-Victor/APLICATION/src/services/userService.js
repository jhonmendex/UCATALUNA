//encargado de gestionar/enlazar los datos
import DataAccess from "../db.js";
const dataAccess = new DataAccess();

(async () => {
    await dataAccess.connect();
})();

const getUser = async () => {
    const data = await dataAccess.findAll("usuario");
    return data;
};
const getUserById = async (id) => {
    const data = await dataAccess.findById("usuario", id);
    return data;
};
const createUser = async (document) => {
    const data = await dataAccess.save("usuario", document);
    return data;
};
const updateUserById = async (document, id) => {
    const data = await dataAccess.updateById("usuario", document, id);
    return data;
};
const deleteUserById = async (id) => {
    const data = await dataAccess.deleteById("usuario", id);
    return data;
};

export default {
    getUser,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
};