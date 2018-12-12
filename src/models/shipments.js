module.exports = (sequelize, DataTypes) => 
	sequelize.define('shipment', {
		supplier_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		code: DataTypes.STRING,
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
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
