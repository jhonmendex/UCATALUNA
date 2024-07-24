import { Router } from "express";

const router = new Router();

router
  .get("/", (req, res) => {
    res.json({ message: "get user" });
  })
  .post("/", (req, res) => {
    res.json({ message: "post user" });
  })
  .put("/", (req, res) => {
    res.json({ message: "put user" });
  })
  .delete("/", (req, res) => {
    res.json({ message: "delete user" });
  });

export default router;
