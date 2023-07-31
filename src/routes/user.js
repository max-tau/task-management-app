const express = require("express");
const UserController = require("../controllers/user");
const userRouter = express.Router();

userRouter
  .post("/", UserController.create)
  .get("/", UserController.findAll)
  .get("/:id", UserController.findUserById)
  .get("/username/:userName", UserController.findUserByUsername)
  .patch("/id/:id", UserController.updateUserById)
  .delete("/:id", UserController.deleteUserById)
  .patch("/picture/:id", UserController.saveProfilePic);

module.exports = userRouter;
