const {products} = require('../models')
const {product_status} = require('../models')
const {product_details} = require('../models')
const {categories} = require('../models')

module.exports = {
	index (req,res){
		products.all({include:[product_details,product_status,categories]}).then(product => {
  			res.status(200).send({
		   		products: product
			})
		})
	},
	async create (req,res){
			try{
				let body = req.body;
				let status = body.status;
				delete body.status;
				
				await products.create(req.body).then(product => {
					var status_payload = {
						product_id : product.dataValues.id,
						status: status,
					}

					product_status.create(status_payload).then(status => {
						var details_payload = {
							product_id: product.dataValues.id
						}

						product_details.create(details_payload).then(details => {
							res.status(201).send({
								product: product
							})
						}).catch(error => {
							res.status(400).send({
								message: error.message
							})
						})
					}).catch(error => {
					   res.status(400).send({
							   message: error.message
					   })
					})
				}).catch(error => {
				   res.status(400).send({
						 message: error.message
				   })
				})
			}catch(error){
				res.status(400).send({
					message: error.message
				})
			}
	},
	show (req,res){
		const id = req.params.id
		products.findAll({
	        where: {
	        	id:id
			},
			include: [product_details,product_status]
	     }).then(product => {
	        if (product && product.length > 0) {
	            res.status(200).send({
		  	 		data: product
		  		})
	        }else{
	        	res.status(204).send()
	        }
	     })
	},
	update (req,res){
		const id = req.params.id
		products.update(req.body,{
			where:{
				id:id
			}
		}).then(product => {
			 res.status(200).send({ 
		    	id: product._id, message: "Product successfully update." 
		    })
		}).catch(error => {
			res.status(400).send({
				message: "Failed to update product. " + error
		  })
		})
	},
	delete (req,res){
		const id = req.params.id
		products.destroy({
			where: {
				id:id
			}
		}).then(() => {
			product_status.destroy({
				where: {
					product_id: id
				}
			}).then(() => {
				product_details.destroy({
					where: {
						product_id: id
					}
				}).then(() => {
					res.status(200).send({
						message: "Successfully deleted."
					})
				}).catch(error => {
					res.status(400).send({
						message: "Failed to delete. " + error
					})
				})
			}).catch(error => {
				res.status(400).send({
					message: "Failed to delete." + error
				})
			})
		}).catch(error =>{
			res.status(400).send({
				message: "Failed to delete." + error
			})
		})
	},
	updateDetails(req, res) {
		const id = req.params.id
		product_details.update(req.body, {
			where: {
				product_id: id
			}
		}).then(product => {
			res.status(200).send({
				id: product._id, message: "Product details successfully update."
			})
		}).catch(error => {
			res.status(400).send({
				message: "Failed to update product details. " + error
			})
		})
	}, 
	updateStatus(req, res) {
		const id = req.params.id
		product_status.update(req.body, {
			where: {
				product_id: id
			}
		}).then(product => {
			res.status(200).send({
				id: product._id, message: "Product status successfully update."
			})
		}).catch(error => {
			res.status(400).send({
				message: "Failed to update product status. " + error
			})
		})
	},
}