const {manufacturers} = require('../models')

module.exports = {
	index (req,res){
		manufacturers.all().then(manufacturer => {
  			res.status(200).send({
		   		manufacturers: manufacturer
			})
		})
	},
	async create (req,res){
		try{
			await manufacturers.create(req.body).then(manufacturer => {
				res.status(201).send({ 
					id: manufacturer._id, message: "Manufacturer registered." 
				})
			}).catch(error => {
				res.status(400).send({
					message: "Manufacturer already exists."
				})
			})
		}catch(error){
			res.status(400).send({
					message: "Manufacturer registration failed."
			})
		}
	},
	show (req,res){
		const id = req.params.id
		manufacturers.findAll({
	        where: {
	        	id:id
	        }
	     }).then(manufacturer => {
	        if (manufacturer && manufacturer.length > 0) {
	            res.status(200).send({
		  	 		data: manufacturer
		  		})
	        }else{
	        	res.status(204).send()
	        }
	     })
	},
	update (req,res){
		const id = req.params.id
		manufacturers.update(req.body,{
			where:{
				id:id
			}
		}).then(manufacturer => {
			 res.status(200).send({ 
		    	id: manufacturer._id, message: "Manufacturer successfully update." 
		    })
		}).catch(error => {
			res.status(400).send({
		  	 	message: "Failed to update manufacturer."
		  	})
		})
	},
	delete (req,res){
		const id = req.params.id
		manufacturers.destroy({
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