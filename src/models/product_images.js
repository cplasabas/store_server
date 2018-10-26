module.exports = (sequelize, DataTypes) =>
  sequelize.define('product_image', {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    filename: DataTypes.STRING,
    public_id: DataTypes.STRING,
    url: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  })
