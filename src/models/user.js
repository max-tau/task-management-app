module.exports = (connection, DataTypes) => {
  const schema = {
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      unique: true,
      allowNull: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jobRole: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profilePic: {
      type: DataTypes.BLOB,
    },
  };

  const UserModel = connection.define("Users", schema);

  return UserModel;
};
