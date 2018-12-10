module.exports = (sequelize, DataTypes) => 
	sequelize.define('product_status', {
		product_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		status: DataTypes.STRING,
		customer_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		agent_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		selling_price:{
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		sold_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		commission: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		term_id: {
			type: DataTypes.INTEGER,
			defaultValue: null,
			allowNull: true
		},
		type: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: true
		},
		paid: {
			type: DataTypes.DOUBLE,
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
