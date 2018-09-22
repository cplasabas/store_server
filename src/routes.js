const AuthController = require("./controllers/AuthController")
const AuthControllerPolicy = require("./policies/AuthControllerPolicy")
const UserController = require("./controllers/UserController")
const JwtControllerPolicy = require("./policies/JwtControllerPolicy")

const ProductController = require("./controllers/ProductController")
const ProductControllerPolicy = require("./policies/ProductControllerPolicy")

const CategoryController = require("./controllers/CategoryController")
const CategoryControllerPolicy = require("./policies/CategoryControllerPolicy")

const ManufacturerController = require("./controllers/ManufacturerController")
const ManufacturerControllerPolicy = require("./policies/ManufacturerControllerPolicy")

module.exports = (app) => {
	app.post('/register',AuthControllerPolicy.register,AuthController.register)
	app.post('/login',AuthController.login)

    app.use('/',JwtControllerPolicy.secure)
    
	app.get('/user',UserController.index)
	app.get('/user/:id',UserController.show)
	app.put('/user/:id',UserController.update)
	app.delete('/user/:id',UserController.delete)

	app.get('/product',ProductController.index)
	app.post('/product',ProductControllerPolicy.create,ProductController.create)
	app.get('/product/:id',ProductController.show)
	app.put('/product/:id',ProductController.update)
	app.delete('/product/:id',ProductController.delete)

	app.get('/category',CategoryController.index)
	app.post('/product',CategoryControllerPolicy.create,CategoryController.create)
	app.get('/category/:id',CategoryController.show)
	app.put('/category/:id',CategoryController.update)
	app.delete('/category/:id',CategoryController.delete)

	app.get('/manufacturer',ManufacturerController.index)
	app.post('/product',ManufacturerControllerPolicy.create,ManufacturerController.create)
	app.get('/manufacturer/:id',ManufacturerController.show)
	app.put('/manufacturer/:id',ManufacturerController.update)
	app.delete('/manufacturer/:id',ManufacturerController.delete)
}	
