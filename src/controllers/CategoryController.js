const {categories} = require('../models')

module.exports = {
	index (req,res){
		categories.all().then(category => {
  			res.status(200).send({
		   		categories: category
			})
		})
	},
	async create (req,res){
		try{
			await categories.create(req.body).then(category => {
				res.status(201).send({ 
					id: category._id, message: "Category registered." 
				})
			}).catch(error => {
				res.status(400).send({
					message: "Category already exists."
				})
			})
		}catch(error){
			res.status(400).send({
					message: "Category registration failed."
			})
		}
	},
	show (req,res){
		const id = req.params.id
		categories.findAll({
	        where: {
	        	id:id
	        }
	     }).then(category => {
	        if (category && category.length > 0) {
	            res.status(200).send({
		  	 		data: category
		  		})
	        }else{
	        	res.status(204).send()
	        }
	     })
	},
	update (req,res){
		const id = req.params.id
		categories.update(req.body,{
			where:{
				id:id
			}
		}).then(category => {
			 res.status(200).send({ 
		    	id: category._id, message: "Category successfully update." 
		    })
		}).catch(error => {
			res.status(400).send({
		  	 	message: "Failed to update category."
		  	})
		})
	},
	delete (req,res){
		const id = req.params.id
		categories.destroy({
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