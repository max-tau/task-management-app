const Sequelize = require("sequelize");

const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env;

const setupDatabase = () => {
  const connection = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    port: PGPORT,
    dialect: "postgres",
    loggin: false,
  });

  connection.sync({ alter: true });
  return {};
};

module.exports = setupDatabase();
