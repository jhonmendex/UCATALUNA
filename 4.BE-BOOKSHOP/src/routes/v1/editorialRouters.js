import { Router } from "express";
import editorialController from "../../controllers/editorialController.js";
const router = new Router();

router
  .get("/", editorialController.getEditorial)
  .get("/:id", editorialController.getEditorialByID)
  .post("/", editorialController.createEditorial)
  .put("/:id", editorialController.updateEditorialByID)
  .delete("/:id", editorialController.deleteEditorialByID);

export default router;
