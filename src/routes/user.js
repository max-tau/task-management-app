const express = require("express");
const UserController = require("../controllers/user");
const userRouter = express.Router();

userRouter.post("/", UserController.create).get("/", UserController.findAll);

module.exports = userRouter;
