module.exports = (sequelize, DataTypes) => 
	sequelize.define('product_status', {
		product_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
        status: DataTypes.STRING,
        seller: {
			type: DataTypes.STRING,
			allowNull: true
		},
        commission_rate: DataTypes.DOUBLE,
        commission: {
			type: DataTypes.DOUBLE,
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
		term_id: {
			type: DataTypes.INTEGER,
			defaultValue: null,
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
