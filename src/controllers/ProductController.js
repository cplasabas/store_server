const {products} = require('../models')
const {product_status} = require('../models')
const {product_details} = require('../models')
const {product_images } = require('../models')
const {categories } = require('../models')
const {suppliers } = require('../models')
const {shipments} = require('../models')

const cloudinary = require('cloudinary');

cloudinary.config({
	cloud_name: 'dtrdp4uus',
	api_key: '223544386456498',
	api_secret: 'HAc2y3UwfcEWkNhUqecKcAOS4OM'
});


module.exports = {
	index (req,res){
		products.all({include:[product_details,product_status,product_images,categories,suppliers,shipments]}).then(product => {
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
				
				await products.create(body).then(product => {
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
			include: [product_details, product_status, product_images,categories,suppliers,shipments]
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
	upload(req, res){
		console.log("yes!");
		
		// try {
		// 	cloudinary.uploader.upload(req.file.path)
		// 	.then(function (image) {
		// 		const id = req.params.id
		// 		let payload = {
		// 			product_id: id,
		// 			filename: req.file.filename,
		// 			public_id: image.public_id,
		// 			url: image.url
		// 		}
		// 		product_images.create(payload).then(image => {
		// 			res.status(201).send({
		// 				file: req.file,image: image, message: "Image uploaded successfully."
		// 			})
		// 		}).catch(error => {
		// 			res.status(400).send({
		// 				message: error.message
		// 			})
		// 		})
		// 	})
		// 	.catch(function (error) {
		// 		res.status(400).send({
		// 			message: error
		// 		})
		// 	});
		// } catch (error) {
		// 	res.status(400).send({
		// 		message: error
		// 	})
		// }
	},
	deleteImage (req,res){
		const id = req.params.id
		const image_id = req.params.image_id

		product_images.findAll({
			where: {
				id: image_id,
				product_id: id
			},
		}).then(image => {
			if (image && image.length > 0) {
				try {
					cloudinary.uploader.destroy(image[0].dataValues.public_id, function (result) {
						if(!result.error){
							product_images.destroy({
								where: {
									id: image_id,
									product_id: id
								}
							}).then(() => {
								res.status(200).send({
									result: result, message: "Image deleted successfully."
								})
							}).catch(function (error) {
								res.status(400).send({
									message: error
								})
							});
						
						}else{
							res.status(400).send({
								message: result.error
							})
						}
					}).catch(function (error) {
						res.status(400).send({
							message: error
						})
					});
				} 
				catch (error) {
					res.status(400).send({
						message: error
					})
				}
			} else {
				res.status(204).send()
			}
		})
	
	}
}