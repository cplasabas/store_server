const {products} = require('../models')
const {product_status} = require('../models')
const {categories} = require('../models')
module.exports = {
	index (req,res){
		products.all({include:[product_status,categories]}).then(product => {
  			res.status(200).send({
		   		products: product
			})
		})
	},
	async create (req,res){
			try{
				await products.create(req.body).then(product => {
					var status_payload = {
						product_id : product.dataValues.id,
						status: "Manufactured",
						commission: 5,
					}
					product_status.create(status_payload).then(product => {
						res.status(201).send({ 
							id: product._id, message: "Product registered." 
						})
					}).catch(error => {
						console.log(error)
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
			include:[product_status]
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
		  	 	message: "Failed to update product."
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
	        res.status(200).send({
		  	 		message: "Successfully deleted."
		  	})
	     }).catch(error =>{
	     	res.status(400).send({
		  	 		message: "Failed to delete."
		  	})
	     })
	}
}