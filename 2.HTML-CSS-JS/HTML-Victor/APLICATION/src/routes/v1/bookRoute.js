import { Router } from "express";
import bookController from "../../controllers/bookController.js";
const router = new Router();

router
    .get("/", bookController.getBook)
    .get("/:id", bookController.getBookById)
    .post("/", bookController.createBook)
    .put("/:id", bookController.updateBookById)
    .delete("/:id", bookController.deleteBookById);

export default router;