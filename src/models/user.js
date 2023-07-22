module.exports = (connection, DataTypes) => {
  const schema = {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jobRole: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };

  const UserModel = connection.define("Users", schema);
  return UserModel;
};
