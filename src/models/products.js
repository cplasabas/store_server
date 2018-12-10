module.exports = (sequelize, DataTypes) => 
	sequelize.define('product', {
		code: DataTypes.STRING,
		description: DataTypes.STRING,
		category_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		supplier_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		shipment_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
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
