const {sales_returns} = require('../models')

module.exports = {
	index (req,res){
		sales_returns.all().then(sales_return => {
  			res.status(200).send({
		   		sales_returns: sales_return
			})
		})
    },
    async create(req, res) {
        try {
          await sales_returns.create(req.body).then(sales_return => {
            res.status(201).send({
              id: sales_return._id, message: "Sales Return registered."
            })
          }).catch(error => {
						console.log(error);
						
            res.status(400).send({
              message: "Sales Return already exists."
            })
          })
        } catch (error) {
          res.status(400).send({
            message: "Sales Return registration failed."
          })
        }
      },
	show (req,res){
		const id = req.params.id
		sales_returns.findAll({
	        where: {
	        	id:id
	        }
	     }).then(sales_return => {
	        if (sales_return && sales_return.length > 0) {
	            res.status(200).send({
		  	 		data: sales_return
		  		})
	        }else{
	        	res.status(204).send()
	        }
	     })
	},
	update (req,res){
		const id = req.params.id;

		sales_returns.update(req.body,{
			where:{
				id:id
			}
		}).then(sales_return => {
			 res.status(200).send({ 
		    	id: sales_return._id, message: "Sales Return successfully update." 
		    })
		}).catch(error => {
			res.status(400).send({
		  	 	message: "Failed to update sales_return."
		  	})
		})
	},
	delete (req,res){
		const id = req.params.id
		sales_returns.destroy({
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