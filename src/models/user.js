module.exports = (connection, DataTypes) => {
  const schema = {
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      unique: true,
    },
    userName: {
      type: DataTypes.STRING,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    jobRole: {
      type: DataTypes.STRING,
    },
  };

  const UserModel = connection.define("Users", schema);
  UserModel.hasMany(connection.models.Tasks, {
    foreignKey: "assignTo",
  });

  return UserModel;
};
