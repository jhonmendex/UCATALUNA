import express, { json } from "express";
import authorRouter from "./routes/v1/authorRoutes.js";
import bookRouter from "./routes/v1/bookRoutes.js";
import editorialRouter from "./routes/v1/editorialRouters.js";
import userRouter from "./routes/v1/userRouters.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(json());
app.use("/api/v1/author", authorRouter);
app.use("/api/v1/book", bookRouter);
app.use("/api/v1/editorial", editorialRouter);
app.use("/api/v1/user", userRouter);

//middleware
app.use((req, res) => {
  res.status(404).json({ error: "ruta no encontrada" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`servidor andando en ${PORT}`);
});
