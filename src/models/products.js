module.exports = (sequelize, DataTypes) => 
	sequelize.define('Product', {
		code: DataTypes.STRING,
		description: DataTypes.STRING,
		category_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		price: DataTypes.DOUBLE,
		createdAt:{
			type: DataTypes.DATE,
			defaultValue:DataTypes.NOW
		},
		updatedAt:{
			type: DataTypes.DATE,
			defaultValue:DataTypes.NOW
		}
	})
