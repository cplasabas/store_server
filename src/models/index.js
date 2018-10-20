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
db.terms = require('../models/terms.js')(sequelize, Sequelize);
db.product_images = require('../models/product_images.js')(sequelize, Sequelize);
db.expenses = require('../models/expenses.js')(sequelize, Sequelize);
db.categories = require('../models/categories.js')(sequelize, Sequelize);

db.products.belongsTo(db.categories,{foreignKey: 'category_id',AS:'category'})
db.products.hasOne(db.product_status,{foreignKey: 'product_id',AS:'product_status'})
db.terms.hasOne(db.product_status, { foreignKey: 'term_id', AS: 'term' })
db.products.hasMany(db.product_images, { foreignKey: 'product_id', AS: 'product_image' })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
