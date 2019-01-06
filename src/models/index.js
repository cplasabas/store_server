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
db.product_details = require('../models/product_details.js')(sequelize, Sequelize);
db.product_status = require('../models/product_status.js')(sequelize, Sequelize);
db.terms = require('../models/terms.js')(sequelize, Sequelize);
db.product_images = require('../models/product_images.js')(sequelize, Sequelize);
db.expenses = require('../models/expenses.js')(sequelize, Sequelize);
db.categories = require('../models/categories.js')(sequelize, Sequelize);
db.customers = require('../models/customers.js')(sequelize, Sequelize);
db.agents = require('../models/agents.js')(sequelize, Sequelize);
db.suppliers = require('../models/suppliers.js')(sequelize, Sequelize);
db.shipments = require('../models/shipments.js')(sequelize, Sequelize);
db.sales_returns = require('../models/sales_returns.js')(sequelize, Sequelize);
db.purchase_returns = require('../models/purchase_returns.js')(sequelize, Sequelize);

db.products.belongsTo(db.categories,{foreignKey: 'category_id',AS:'category'})
db.products.belongsTo(db.suppliers,{foreignKey: 'supplier_id',AS:'supplier'})
db.products.belongsTo(db.shipments,{foreignKey: 'shipment_id',AS:'shipment'})
db.products.hasOne(db.product_status,{foreignKey: 'product_id',AS:'product_status'})
db.products.hasOne(db.product_details, { foreignKey: 'product_id', AS: 'product_details' })
db.terms.hasOne(db.product_status, { foreignKey: 'term_id', AS: 'term' })
db.customers.hasOne(db.product_status, { foreignKey: 'customer_id', AS: 'customer' })
db.agents.hasOne(db.product_status, { foreignKey: 'agent_id', AS: 'agent' })
db.products.hasMany(db.product_images, { foreignKey: 'product_id', AS: 'product_image' })
db.shipments.belongsTo(db.suppliers,{foreignKey: 'supplier_id',AS:'supplier'})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
