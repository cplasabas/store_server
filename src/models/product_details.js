module.exports = (sequelize, DataTypes) =>
  sequelize.define('product_details', {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    diamond_party: DataTypes.STRING,
    diamond_cost: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    diamond_size: DataTypes.STRING,
    diamond_weight: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    diamond_weight_price: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    gold_weight: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    gold_gross_weight: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    gold_net_weight: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    gold_touch: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    gold_cost: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    labor: DataTypes.DOUBLE,
    manufacture_cost: DataTypes.DOUBLE,
    manufacture_date: DataTypes.DATE,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  })
