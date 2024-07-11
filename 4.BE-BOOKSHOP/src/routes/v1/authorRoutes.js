import { Router } from "express";
import authorController from "../../controllers/authorController.js";
const router = new Router();

router
  .get("/", authorController.getAuthor)
  .get("/:id", authorController.getAuthorByID)
  .post("/", authorController.createAuthor)
  .put("/:id", authorController.updateAuthorByID)
  .delete("/:id", authorController.deleteAuthorByID);

export default router;
