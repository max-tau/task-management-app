const express = require("express");
const UserController = require("../controllers/user");
const userRouter = express.Router();

userRouter
  .post("/", UserController.create)
  .get("/", UserController.findAll)
  .get("/username/:username", UserController.findUserByUsername)
  .get("/id/:id", UserController.findUserById)
  .patch("/:id", UserController.updateUserById)
  .delete("/:id", UserController.deleteUserById);

module.exports = userRouter;
