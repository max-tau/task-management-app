const { Task } = require("../models");

exports.create = async (req, res) => {
  const newTask = await Task.create(req.body);

  res.status(201).json(newTask);
};

exports.findAll = async (_, res) => {
  const tasks = await Task.findAll();

  res.status(200).json(tasks);
};
