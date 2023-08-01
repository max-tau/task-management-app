const express = require("express");
const cors = require("cors");
const taskRouter = require("./routes/task");
const userRouter = require("./routes/user");
const commentsRouter = require("./routes/comments");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/task", taskRouter);
app.use("/user", userRouter);
app.use("/comments", commentsRouter);

module.exports = app;
