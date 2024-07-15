import { Router } from "express";
import userController from "../../controllers/userController.js";
const router = new Router();

router
    .get("/", userController.getUser)
    .get("/:id", userController.getUserById)
    .post("/", userController.createUser)
    .put("/:id", userController.updateUserById)
    .delete("/:id", userController.deleteUserById);

export default router;