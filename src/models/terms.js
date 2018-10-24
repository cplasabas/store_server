module.exports = (sequelize, DataTypes) => 
	sequelize.define('terms', {
		name: DataTypes.STRING,
		description: DataTypes.STRING,
		months: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
		years: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
		days: {
			type: DataTypes.INTEGER,
			defaultValue: 0
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
