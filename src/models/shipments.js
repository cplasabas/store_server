module.exports = (sequelize, DataTypes) => 
	sequelize.define('shipment', {
		name: DataTypes.STRING,
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
