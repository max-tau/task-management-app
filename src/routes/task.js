const express = require("express");
const TaskController = require("../controllers/task");
const taskRouter = express.Router();

taskRouter
  .post("/", TaskController.create)
  .get("/", TaskController.findAll)
  .get("/:assignTo", TaskController.findByQuery)
  .get("/:id", TaskController.findTaskById)
  .patch("/:id", TaskController.updateTaskById)
  .delete("/:id", TaskController.deleteTaskById);

module.exports = taskRouter;
