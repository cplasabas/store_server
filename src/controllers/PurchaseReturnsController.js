const {purchase_returns} = require('../models')

module.exports = {
	index (req,res){
		purchase_returns.all().then(purchase_return => {
  			res.status(200).send({
		   		purchase_returns: purchase_return
			})
		})
    },
    async create(req, res) {
        try {
          await purchase_returns.create(req.body).then(purchase_return => {
            res.status(201).send({
              id: purchase_return._id, message: "Purchase Return registered."
            })
          }).catch(error => {
						console.log(error);
						
            res.status(400).send({
              message: "Purchase Return already exists."
            })
          })
        } catch (error) {
          res.status(400).send({
            message: "Purchase Return registration failed."
          })
        }
      },
	show (req,res){
		const id = req.params.id
		purchase_returns.findAll({
	        where: {
	        	id:id
	        }
	     }).then(purchase_return => {
	        if (purchase_return && purchase_return.length > 0) {
	            res.status(200).send({
		  	 		data: purchase_return
		  		})
	        }else{
	        	res.status(204).send()
	        }
	     })
	},
	update (req,res){
		const id = req.params.id;

		purchase_returns.update(req.body,{
			where:{
				id:id
			}
		}).then(purchase_return => {
			 res.status(200).send({ 
		    	id: purchase_return._id, message: "Purchase Return successfully update." 
		    })
		}).catch(error => {
			res.status(400).send({
		  	 	message: "Failed to update purchase_return."
		  	})
		})
	},
	delete (req,res){
		const id = req.params.id
		purchase_returns.destroy({
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