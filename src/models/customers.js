module.exports = (sequelize, DataTypes) => 
	sequelize.define('customer', {
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		contact: {
			type: DataTypes.STRING,
			allowNull: true
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
