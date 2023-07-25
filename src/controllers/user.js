const { User } = require("../models");

exports.create = async (req, res) => {
  const newUser = await User.create(req.body);

  res.status(201).json(newUser);
};

exports.findAll = async (_, res) => {
  const users = await User.findAll();

  res.status(200).json(users);
};
