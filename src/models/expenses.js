module.exports = (sequelize, DataTypes) =>
  sequelize.define('expense', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    amount: DataTypes.DOUBLE,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  })
