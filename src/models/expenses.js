module.exports = (sequelize, DataTypes) =>
  sequelize.define('expense', {
    name: DataTypes.STRING,
    or_number: DataTypes.STRING,
    tin: DataTypes.STRING,
    description: DataTypes.STRING,
    amount: DataTypes.DOUBLE,
    or_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
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
