module.exports = (sequelize, DataTypes) => 
	sequelize.define('category', {
		name: DataTypes.STRING,
		description: DataTypes.STRING,
		commission_rate: DataTypes.DOUBLE,
		createdAt:{
			type: DataTypes.DATE,
			defaultValue:DataTypes.NOW
		},
		updatedAt:{
			type: DataTypes.DATE,
			defaultValue:DataTypes.NOW
		}
	})
