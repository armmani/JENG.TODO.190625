import express from "express";

const todoRouter = express.Router();

todoRouter.get("/", (req, res) => {});
todoRouter.get("/:id", (req, res) => {});

todoRouter.post("/", (req, res) => {});
todoRouter.patch("/:id", (req, res) => {});
todoRouter.delete("/:id", (req, res) => {});

export default todoRouter