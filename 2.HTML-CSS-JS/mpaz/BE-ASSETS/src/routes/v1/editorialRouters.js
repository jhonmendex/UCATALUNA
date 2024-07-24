import { Router } from "express";

const router = new Router();

router
  .get("/", (req, res) => {
    res.json({ message: "get editorial" });
  })
  .post("/", (req, res) => {
    res.json({ message: "post editorial" });
  })
  .put("/", (req, res) => {
    res.json({ message: "put editorial" });
  })
  .delete("/", (req, res) => {
    res.json({ message: "delete editorial" });
  });

export default router;
