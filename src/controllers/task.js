const { Task } = require("../models");

exports.create = async (req, res) => {
  const newTask = await Task.create(req.body);

  res.status(201).json(newTask);
};

exports.findAll = async (_, res) => {
  const tasks = await Task.findAll();

  res.status(200).json(tasks);
};

// exports.updateStatus = async (req, res) => {
//   const { id } = req.params;
//   const [task] = Task.update(req.body, { where: { id } });

//   if (!task) {
//     res.status(404).json({ error: "Task could not be found" });
//   }
//   res.status(200).json(task);
// };
