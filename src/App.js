const express = require("express");
const cors = require("cors");
const taskRouter = require("./routes/task");
const userRouter = require("./routes/user");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/task", taskRouter);
app.use("/user", userRouter);

module.exports = app;
