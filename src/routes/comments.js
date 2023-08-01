const express = require("express");
const CommentsController = require("../controllers/comments");
const commentsRouter = express.Router();

commentsRouter
  .post("/", CommentsController.create)
  .get("/:TaskId", CommentsController.findByTaskId)
  .patch("/:id", CommentsController.updateCommentsById)
  .delete("/:id", CommentsController.deleteCommentsById);

module.exports = commentsRouter;
