module.exports = (sequelize, DataTypes) => 
	sequelize.define('supplier', {
		name: DataTypes.STRING,
		code:{
			type: DataTypes.STRING,
			unique: true
		},
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
