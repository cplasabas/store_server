module.exports = (sequelize, DataTypes) => 
	sequelize.define('terms', {
		name: DataTypes.STRING,
		description: DataTypes.STRING,
		month: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
		year: {
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
