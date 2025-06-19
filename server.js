import express from "express";
import cors from "cors";
import todoRouter from "./src/routes/todo.route.js";

const app = express();

app.use(express.json()); // req.body got
app.use(cors());

app.use("/todo", authenticate, todoRouter);

const PORT = process.env.PORT || 8889;

app.listen(PORT, () => console.log(`Server is running PORT: ${PORT}`));
