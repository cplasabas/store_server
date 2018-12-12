const {shipments} = require('../models')
const {suppliers} = require('../models')

module.exports = {
	index (req,res){
		shipments.all({include:[suppliers]}).then(shipment => {
  			res.status(200).send({
		   		shipments: shipment
			})
		})
    },
    async create(req, res) {
        try {
          await shipments.create(req.body).then(shipment => {
            res.status(201).send({
              id: shipment._id, message: "shipment registered."
            })
          }).catch(error => {
						console.log(error);
						
            res.status(400).send({
              message: "shipment already exists."
            })
          })
        } catch (error) {
          res.status(400).send({
            message: "shipment registration failed."
          })
        }
      },
	show (req,res){
		const id = req.params.id
		shipments.findAll({
	        where: {
	        	id:id
					},
					include: [suppliers]
	     }).then(shipment => {
	        if (shipment && shipment.length > 0) {
	            res.status(200).send({
		  	 		data: shipment
		  		})
	        }else{
	        	res.status(204).send()
	        }
	     })
	},
	update (req,res){
		const id = req.params.id;

		shipments.update(req.body,{
			where:{
				id:id
			}
		}).then(shipment => {
			 res.status(200).send({ 
		    	id: shipment._id, message: "shipment successfully update." 
		    })
		}).catch(error => {
			res.status(400).send({
		  	 	message: "Failed to update shipment."
		  	})
		})
	},
	delete (req,res){
		const id = req.params.id
		shipments.destroy({
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