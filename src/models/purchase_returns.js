module.exports = (sequelize, DataTypes) => 
	sequelize.define('purchase_returns', {
		product_code: DataTypes.STRING,
		supplier_name: DataTypes.STRING,
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
