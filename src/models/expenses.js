module.exports = (sequelize, DataTypes) =>
  sequelize.define('expense', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    amount: DataTypes.DOUBLE,
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  })
