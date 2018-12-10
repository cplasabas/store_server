const {agents} = require('../models')

module.exports = {
	index (req,res){
		agents.all().then(agent => {
  			res.status(200).send({
		   		agents: agent
			})
		})
    },
    async create(req, res) {
        try {
          await agents.create(req.body).then(agent => {
            res.status(201).send({
              id: agent._id, message: "Agent registered."
            })
          }).catch(error => {
						console.log(error);
						
            res.status(400).send({
              message: "Agent already exists."
            })
          })
        } catch (error) {
          res.status(400).send({
            message: "Agent registration failed."
          })
        }
      },
	show (req,res){
		const id = req.params.id
		agents.findAll({
	        where: {
	        	id:id
	        }
	     }).then(agent => {
	        if (agent && agent.length > 0) {
	            res.status(200).send({
		  	 		data: agent
		  		})
	        }else{
	        	res.status(204).send()
	        }
	     })
	},
	update (req,res){
		const id = req.params.id;

		agents.update(req.body,{
			where:{
				id:id
			}
		}).then(agent => {
			 res.status(200).send({ 
		    	id: agent._id, message: "Agent successfully update." 
		    })
		}).catch(error => {
			res.status(400).send({
		  	 	message: "Failed to update agent."
		  	})
		})
	},
	delete (req,res){
		const id = req.params.id
		agents.destroy({
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