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

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
