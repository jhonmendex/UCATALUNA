import { Router } from "express";
import userController from "../../controllers/userController.js";
const router = new Router();

router
  .get("/", userController.getUser)
  .get("/:id", userController.getUserByID)
  .post("/", userController.createUser)
  .put("/:id", userController.updateUserByID)
  .delete("/:id", userController.deleteUserByID);

export default router;
