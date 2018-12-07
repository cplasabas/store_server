const {customers} = require('../models')

module.exports = {
	index (req,res){
		customers.all().then(customer => {
  			res.status(200).send({
		   		customers: customer
			})
		})
    },
    async create(req, res) {
        try {
          await customers.create(req.body).then(customer => {
            res.status(201).send({
              id: customer._id, message: "Customer registered."
            })
          }).catch(error => {
						console.log(error);
						
            res.status(400).send({
              message: "Customer already exists."
            })
          })
        } catch (error) {
          res.status(400).send({
            message: "Customer registration failed."
          })
        }
      },
	show (req,res){
		const id = req.params.id
		customers.findAll({
	        where: {
	        	id:id
	        }
	     }).then(customer => {
	        if (customer && customer.length > 0) {
	            res.status(200).send({
		  	 		data: customer
		  		})
	        }else{
	        	res.status(204).send()
	        }
	     })
	},
	update (req,res){
		const id = req.params.id;

		customers.update(req.body,{
			where:{
				id:id
			}
		}).then(customer => {
			 res.status(200).send({ 
		    	id: customer._id, message: "Customer successfully update." 
		    })
		}).catch(error => {
			res.status(400).send({
		  	 	message: "Failed to update customer."
		  	})
		})
	},
	delete (req,res){
		const id = req.params.id
		customers.destroy({
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