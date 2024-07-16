import express, { json } from "express";
import authorRoute from "./routes/v1/authorRoute.js";
import bookRoute from "./routes/v1/bookRoute.js";
import editorialRoute from "./routes/v1/editorialRoute.js";
import userRoute from "./routes/v1/userRoute.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(json());
app.use("/api/v1/author", authorRoute);
app.use("/api/v1/book", bookRoute);
app.use("/api/v1/editorial", editorialRoute);
app.use("/api/v1/user", userRoute);

//middleweare
app.use((req, res) => {
    res.status(404).json({error: "ruta no encontrada"});
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
    console.log(`servidor andando en ${PORT}`);
});
