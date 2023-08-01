const express = require("express");
const UserController = require("../controllers/user");
const userRouter = express.Router();

userRouter
  .post("/", UserController.create)
  .get("/", UserController.findAll)
  .get("/id/:id", UserController.findUserById)
  .get("/username/:userName", UserController.findUserByUsername)
  .patch("/id/:id", UserController.updateUserById)
  .patch("/picture/:id", UserController.saveProfilePic)
  .delete("/:id", UserController.deleteUserById);

module.exports = userRouter;
