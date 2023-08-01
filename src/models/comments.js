module.exports = (connection, DataTypes) => {
  const schema = {
    comment: {
      type: DataTypes.STRING,
    },
    TaskId: {
      type: DataTypes.INTEGER,
    },
  };

  const CommentModel = connection.define("Comments", schema);

  return CommentModel;
};
