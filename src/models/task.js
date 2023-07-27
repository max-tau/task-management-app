module.exports = (connection, DataTypes) => {
  const schema = {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    details: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priorityLevel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    assignTo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comments: DataTypes.STRING,
    status: DataTypes.STRING,
  };

  const TaskModel = connection.define("Tasks", schema);
  TaskModel.belongsTo(connection.models.Users, { foreignKey: "id" });

  return TaskModel;
};
