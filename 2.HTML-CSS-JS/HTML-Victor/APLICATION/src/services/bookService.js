//encargado de gestionar/enlazar los datos
import DataAccess from "../db.js";
const dataAccess = new DataAccess();

(async () => {
    await dataAccess.connect();
})();

const getBook = async () => {
    const data = await dataAccess.findAll("libro");
    return data;
};
const getBookById = async (id) => {
    const data = await dataAccess.findById("libro", id);
    return data;
};
const createBook = async (document) => {
    const data = await dataAccess.save("libro", document);
    return data;
};
const updateBookById = async (document, id) => {
    const data = await dataAccess.updateById("libro", document, id);
    return data;
};
const deleteBookById = async (id) => {
    const data = await dataAccess.deleteById("libro", id);
    return data;
};

export default {
    getBook,
    getBookById,
    createBook,
    updateBookById,
    deleteBookById
};