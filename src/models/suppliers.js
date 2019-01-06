module.exports = (sequelize, DataTypes) => 
	sequelize.define('supplier', {
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		contact: {
			type: DataTypes.STRING,
			allowNull: true
		},
		address: DataTypes.STRING,
		createdAt:{
			type: DataTypes.DATE,
			defaultValue:DataTypes.NOW
		},
		updatedAt:{
			type: DataTypes.DATE,
			defaultValue:DataTypes.NOW
		}
	})
