const {users} = require('../models')

module.exports = {
	index (req,res){
		users.all().then(user => {
  			res.status(200).send({
		   		users: user
			})
		})
	},
	show (req,res){
		const id = req.params.id
		users.findAll({
	        where: {
	        	id:id
	        }
	     }).then(user => {
	        if (user && user.length > 0) {
	            res.status(200).send({
		  	 		data: user
		  		})
	        }else{
	        	res.status(204).send()
	        }
	     })
	},
	update (req,res){
		const id = req.params.id
		users.update(req.body,{
			where:{
				id:id
			}
		}).then(user => {
			 res.status(200).send({ 
		    	id: user._id, message: "User successfully update." 
		    })
		}).catch(error => {
			res.status(400).send({
		  	 	message: "Failed to update user."
		  	})
		})
	},
	delete (req,res){
		const id = req.params.id
		users.destroy({
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