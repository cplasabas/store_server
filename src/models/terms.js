module.exports = (sequelize, DataTypes) => 
	sequelize.define('term', {
		name: DataTypes.STRING,
		description: DataTypes.STRING,
		interest: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
		months: {
			type: DataTypes.DOUBLE,
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
