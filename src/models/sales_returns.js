module.exports = (sequelize, DataTypes) => 
	sequelize.define('sales_returns', {
		product_code: DataTypes.STRING,
		client_name: DataTypes.STRING,
		return_date:{
			type: DataTypes.DATE,
			defaultValue:DataTypes.NOW
		},
		createdAt:{
			type: DataTypes.DATE,
			defaultValue:DataTypes.NOW
		},
		updatedAt:{
			type: DataTypes.DATE,
			defaultValue:DataTypes.NOW
		}
	})
