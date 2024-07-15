import { Router } from "express";
import authorController from "../../controllers/authorController.js";
const router = new Router();

router
    .get("/", authorController.getAuthor)
    .get("/:id", authorController.getAuthorById)
    .post("/", authorController.createAuthor)
    .put("/:id", authorController.updateAuthorById)
    .delete("/:id", authorController.deleteAuthorById);

export default router;