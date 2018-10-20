const AuthController = require("./controllers/AuthController")
const AuthControllerPolicy = require("./policies/AuthControllerPolicy")
const UserController = require("./controllers/UserController")
const JwtControllerPolicy = require("./policies/JwtControllerPolicy")

const ProductController = require("./controllers/ProductController")
const ProductControllerPolicy = require("./policies/ProductControllerPolicy")

const ExpenseController = require("./controllers/ExpenseController")
const ExpenseControllerPolicy = require("./policies/ExpenseControllerPolicy")

const TermsController = require("./controllers/TermsController")
const TermsControllerPolicy = require("./policies/TermsControllerPolicy")

const CategoryController = require("./controllers/CategoryController")
const CategoryControllerPolicy = require("./policies/CategoryControllerPolicy")

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

	app.get('/expense', ExpenseController.index)
	app.post('/expense', ExpenseControllerPolicy.create, ExpenseController.create)
	app.get('/expense/:id', ExpenseController.show)
	app.put('/expense/:id', ExpenseController.update)
	app.delete('/expense/:id', ExpenseController.delete)

	app.get('/term', TermsController.index)
	app.post('/term', TermsControllerPolicy.create, TermsController.create)
	app.get('/term/:id', TermsController.show)
	app.put('/term/:id', TermsController.update)
	app.delete('/term/:id', TermsController.delete)

	app.get('/category',CategoryController.index)
	app.post('/category',CategoryControllerPolicy.create,CategoryController.create)
	app.get('/category/:id',CategoryController.show)
	app.put('/category/:id',CategoryController.update)
	app.delete('/category/:id',CategoryController.delete)
}	
