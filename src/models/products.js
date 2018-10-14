module.exports = (sequelize, DataTypes) => 
	sequelize.define('Product', {
		code: DataTypes.STRING,
		description: DataTypes.STRING,
		category_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		price: DataTypes.DOUBLE,
		carat: DataTypes.DOUBLE,
		gold: DataTypes.DOUBLE,
		diamond: DataTypes.DOUBLE,
		labor: DataTypes.DOUBLE,
		manufacture_cost: DataTypes.DOUBLE,
		manufacture_date: DataTypes.DATE,
		createdAt:{
			type: DataTypes.DATE,
			defaultValue:DataTypes.NOW
		},
		updatedAt:{
			type: DataTypes.DATE,
			defaultValue:DataTypes.NOW
		}
	})
