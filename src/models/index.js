const { Sequelize, DataTypes } = require("sequelize");
const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env;

const setupDatabase = () => {
  const connection = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    port: PGPORT,
    dialect: "postgres",
    logging: false,
  });

  const User = require("./user")(connection, DataTypes);
  const Task = require("./task")(connection, DataTypes);

  User.hasMany(Task, { foreignKey: "assignTo" });
  Task.belongsTo(User);

  connection.sync({ alter: true });
  return {
    User,
    Task,
  };
};

module.exports = setupDatabase();
