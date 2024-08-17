import axios from "axios";
import config from "../config.js";
// Define la URL base de tu API
const API_URL = config.apiUrl + "book";
//http://127.0.0.1:5500/api/v1/book
// Define las funciones que interactúan con el backend

// Obtener todos los libros
const getBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response;
  } catch (error) {
    console.error("Error fetching books", error);
    throw error;
  }
};

// Obtener un libro por su ID
const getBookByID = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response;
  } catch (error) {
    console.error(`Error fetching book with ID ${id}`, error);
    throw error;
  }
};

// Crear un nuevo libro
const createBook = async (bookData) => {
  try {
    const response = await axios.post(API_URL, bookData);
    return response;
  } catch (error) {
    console.error("Error creating book", error);
    throw error;
  }
};

// Actualizar un libro por su ID
const updateBookByID = async (bookData, id) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, bookData);
    return response;
  } catch (error) {
    console.error(`Error updating book with ID ${id}`, error);
    throw error;
  }
};

// Eliminar un libro por su ID
const deleteBookByID = async (id) => {
  console.log(id);
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response;
  } catch (error) {
    console.error(`Error deleting book with ID ${id}`, error);
    throw error;
  }
};

// Exporta las funciones para su uso en otros archivos
export default {
  getBooks,
  getBookByID,
  createBook,
  updateBookByID,
  deleteBookByID,
};
