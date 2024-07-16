import { Router } from "express";
import editorialController from "../../controllers/editorialController.js";
const router = new Router();

router
    .get("/", editorialController.getEditorial)
    .get("/:id", editorialController.getEditorialById)
    .post("/", editorialController.createEditorial)
    .put("/:id", editorialController.updateEditorialById)
    .delete("/:id", editorialController.deleteEditorialById);

export default router;