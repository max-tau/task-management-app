const express = require("express");
const TaskController = require("../controllers/task");
const taskRouter = express.Router();

taskRouter.post("/", TaskController.create).get("/", TaskController.findAll);

module.exports = taskRouter;
