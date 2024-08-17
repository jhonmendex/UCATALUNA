import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import bookService from "../../services/bookService.js"; // Ajusta la ruta según tu estructura

const Books = () => {
  const [books, setBooks] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [formData, setFormData] = useState({
    libId: "",
    libNombre: "",
    libPub: "",
  });

  const fetchBooks = async () => {
    const response = await bookService.getBooks();
    setBooks(response.data);
  };

  //component did mount
  useEffect(() => {
    fetchBooks();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOpenDialog = (book = null) => {
    if (book) {
      setFormData(book);
      setSelectedBookId(book._id);
    } else {
      setFormData({
        libId: "",
        libNombre: "",
        libPub: "",
      });
      setSelectedBookId(null);
    }
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    if (selectedBookId) {
      const { _id, ...dataWithoutId } = formData;
      await bookService.updateBookByID(dataWithoutId, selectedBookId);
    } else {
      await bookService.createBook(formData);
    }
    fetchBooks();
    handleCloseDialog();
  };

  const handleDelete = async (id) => {
    await bookService.deleteBookByID(id);
    fetchBooks();
  };

  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpenDialog()}
      >
        Add Book
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Publición</TableCell>
              <TableCell>Editar / Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book._id}>
                <TableCell>{book.libId}</TableCell>
                <TableCell>{book.libNombre}</TableCell>
                <TableCell>{book.libPub}</TableCell>
                <TableCell>
                  <Button onClick={() => handleOpenDialog(book)}>Edit</Button>
                  <Button
                    onClick={() => handleDelete(book._id)}
                    color="secondary"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>{selectedBookId ? "Edit Book" : "Add Book"}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="libId"
            label="Id"
            type="text"
            fullWidth
            value={formData.libId}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="libNombre"
            label="Nombre"
            type="text"
            fullWidth
            value={formData.libNombre}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="libPub"
            label="Publicación"
            type="text"
            fullWidth
            value={formData.libPub}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {selectedBookId ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Books;
