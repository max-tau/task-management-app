const { Comments } = require("../models");

exports.create = async (req, res) => {
  const newComment = await Comments.create(req.body);

  res.status(201).json(newComment);
};

exports.findByTaskId = async (req, res) => {
  const filteredComments = await Comments.findAll({
    where: {
      TaskId: req.params.TaskId,
    },
  });

  res.status(200).json(filteredComments);
};

exports.updateCommentsById = async (req, res) => {
  const commentId = req.params.id;
  const updatedComment = await Comments.update(req.body, {
    where: { id: commentId },
  });

  res.status(200).json(updatedComment);
};

exports.deleteCommentsById = async (req, res) => {
  const commentId = req.params.id;
  const deletedComment = await Comments.destroy({ where: { id: commentId } });

  res.status(200).json(deletedComment);
};
