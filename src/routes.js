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

const CustomerController = require("./controllers/CustomerController")
const CustomerControllerPolicy = require("./policies/CustomerControllerPolicy")

const AgentController = require("./controllers/AgentController")
const AgentControllerPolicy = require("./policies/AgentControllerPolicy")

const SupplierController = require("./controllers/SupplierController")
const SupplierControllerPolicy = require("./policies/SupplierControllerPolicy")

const ShipmentController = require("./controllers/ShipmentController")
const ShipmentControllerPolicy = require("./policies/ShipmentControllerPolicy")

const PurchaseReturnsController = require("./controllers/PurchaseReturnsController")
const PurchaseReturnsControllerPolicy = require("./policies/PurchaseReturnsControllerPolicy")

const SalesReturnsController = require("./controllers/SalesReturnsController")
const SalesReturnsControllerPolicy = require("./policies/SalesReturnsControllerPolicy")

let multer = require('multer')
let upload = multer({ dest: './uploads/' });

module.exports = (app) => {
	app.post('/login',AuthController.login)

	app.get('/product', ProductController.index)
	app.get('/product/:id', ProductController.show)

	app.get('/category',CategoryController.index)
		app.get('/category/:id',CategoryController.show)

	app.use('/',JwtControllerPolicy.secure)
	
	app.post('/register', AuthControllerPolicy.register, AuthController.register)
    
	app.get('/user',UserController.index)
	app.get('/user/:id',UserController.show)
	app.put('/user/:id',UserController.update)
	app.delete('/user/:id',UserController.delete)

	app.post('/product',ProductControllerPolicy.create,ProductController.create)
	app.get('/sales', ProductController.sales)
	app.put('/product/:id',ProductController.update)
	app.delete('/product/:id',ProductController.delete)
	app.put('/product_details/:id', ProductController.updateDetails)
	app.put('/product_status/:id', ProductController.updateStatus)
	app.post('/product/:id/image', upload.single('image'), ProductController.upload)
	app.delete('/product/:id/image/:image_id', ProductController.deleteImage)

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

	app.post('/category',CategoryControllerPolicy.create,CategoryController.create)
	app.put('/category/:id',CategoryController.update)
	app.delete('/category/:id',CategoryController.delete)

	app.get('/customer',CustomerController.index)
	app.post('/customer',CustomerControllerPolicy.create,CustomerController.create)
	app.get('/customer/:id',CustomerController.show)
	app.put('/customer/:id',CustomerController.update)
	app.delete('/customer/:id',CustomerController.delete)

	app.get('/agent',AgentController.index)
	app.post('/agent',AgentControllerPolicy.create,AgentController.create)
	app.get('/agent/:id',AgentController.show)
	app.put('/agent/:id',AgentController.update)
	app.delete('/agent/:id',AgentController.delete)

	app.get('/supplier',SupplierController.index)
	app.post('/supplier',SupplierControllerPolicy.create,SupplierController.create)
	app.get('/supplier/:id',SupplierController.show)
	app.put('/supplier/:id',SupplierController.update)
	app.delete('/supplier/:id',SupplierController.delete)

	app.get('/shipment',ShipmentController.index)
	app.post('/shipment',ShipmentControllerPolicy.create,ShipmentController.create)
	app.get('/shipment/:id',ShipmentController.show)
	app.put('/shipment/:id',ShipmentController.update)
	app.delete('/shipment/:id',ShipmentController.delete)

	app.get('/purchase_returns',PurchaseReturnsController.index)
	app.post('/purchase_returns',PurchaseReturnsControllerPolicy.create,PurchaseReturnsController.create)
	app.get('/purchase_returns/:id',PurchaseReturnsController.show)
	app.put('/purchase_returns/:id',PurchaseReturnsController.update)
	app.delete('/purchase_returns/:id',PurchaseReturnsController.delete)

	app.get('/Sales_returns',SalesReturnsController.index)
	app.post('/Sales_returns',SalesReturnsControllerPolicy.create,SalesReturnsController.create)
	app.get('/Sales_returns/:id',SalesReturnsController.show)
	app.put('/Sales_returns/:id',SalesReturnsController.update)
	app.delete('/Sales_returns/:id',SalesReturnsController.delete)
}	
