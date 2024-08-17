import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Book from "../bookshop/Book.jsx";
const BookShop = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/books" element={<Book />} />
          <Route path="/editorials" element={<p>editoriales</p>} />
          <Route path="/authors" element={<p>autores</p>} />
        </Routes>
      </Router>
    </>
  );
};

export default BookShop;
