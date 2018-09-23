const fs = require("fs")
const path = require("path")
const Sequelize = require("sequelize")
const config = require("../config/config")
const db = {}

const sequelize = new Sequelize(
	config.db.database,
	config.db.user,
	config.db.pass,
	config.db.options
)

db.users = require('../models/users.js')(sequelize, Sequelize);
db.products = require('../models/products.js')(sequelize, Sequelize);
db.product_status = require('../models/product_status.js')(sequelize, Sequelize);
db.manufacturers = require('../models/manufacturers.js')(sequelize, Sequelize);
db.categories = require('../models/categories.js')(sequelize, Sequelize);

db.products.belongsTo(db.categories,{foreignKey: 'category_id',AS:'category'})
db.products.belongsTo(db.manufacturers, {foreignKey: 'manufacturer_id',AS:'manufacturer'})
db.products.hasOne(db.product_status,{foreignKey: 'product_id',AS:'product_status'})


db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
