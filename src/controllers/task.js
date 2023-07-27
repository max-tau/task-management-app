const { Task } = require("../models");

exports.create = async (req, res) => {
  const newTask = await Task.create(req.body);

  res.status(201).json(newTask);
};

exports.findAll = async (_, res) => {
  const tasks = await Task.findAll();

  res.status(200).json(tasks);
};

exports.findByQuery = async (req, res) => {
  console.log(req.query);
  const filteredTasks = await Task.findAll({
    where: {
      assignTo: req.params.assignTo,
    },
  });

  res.status(200).json(filteredTasks);
};

exports.findTaskById = async (req, res) => {
  const taskId = req.params.id;
  const task = await Task.findByPk(taskId);
  res.status(200).json(task);
};

exports.updateTaskById = async (req, res) => {
  const taskId = req.params.id;
  const updatedTask = await Task.update(req.body, {
    where: { id: taskId },
  });

  if (updatedTask[0] === 0) {
    return res.status(404).json({ error: "Task not found!" });
  }
  res.status(200).json({ message: "Task updated!" });
};

exports.deleteTaskById = async (req, res) => {
  const taskId = req.params.id;
  const deletedTask = await Task.destroy({ where: { id: taskId } });

  if (deletedTask === 0) {
    return res.status(404).json({ error: "Task not found!" });
  }

  res.status(200).json({ message: "Task deleted!" });
};
