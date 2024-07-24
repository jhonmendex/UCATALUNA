import { Router } from "express";
import bookController from "../../controllers/bookController.js";
const router = new Router();

router
  .get("/", bookController.getbook)
  .get("/:id", bookController.getbookByID)
  .post("/", bookController.createbook)
  .put("/:id", bookController.updatebookByID)
  .delete("/:id", bookController.deletebookByID);

export default router;
