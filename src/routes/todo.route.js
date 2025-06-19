import express from "express";
import todoController from "../controllers/todo.controller.js";

const todoRouter = express.Router();

todoRouter.get("/", todoController.getAllTodo);
todoRouter.get("/:id", todoController.getAllTodoById);

todoRouter.post("/", (req, res) => {});
todoRouter.patch("/:id", (req, res) => {});
todoRouter.delete("/:id", (req, res) => {});

export default todoRouter;
