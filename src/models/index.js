const Sequelize = require("sequelize");
const UserModel = require("./user");
const TaskModel = require("./task");

const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env;

const setupDatabase = () => {
  const connection = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    port: PGPORT,
    dialect: "postgres",
    loggin: false,
  });

  const User = UserModel(connection, Sequelize);
  const Task = TaskModel(connection, Sequelize);

  connection.sync({ alter: true });
  return {
    User,
    Task,
  };
};

module.exports = setupDatabase();
