const joi = require("joi")

module.exports = {
	create (req,res,next) {
		const schema = {
			name: joi.string(),
			description: joi.string(),
			category_id: joi.number().integer(),
			manufacturer_id: joi.number().integer(),
			price: joi.number().integer(),
			carat: joi.number().integer().allow(''),
            gold: joi.number().integer().allow(''),
            diamon: joi.number().integer().allow(''),
            labor: joi.number().integer().allow(''),
            manufacture_cost: joi.number().integer().allow(''),
            manufacture_date: joi.date().timestamp(),
		}	

		const {error,value} = joi.validate(req.body,schema)

		if(!error){
			next()	
		}else{
			res.status(400).send({
				error: error.details[0].message
			})
		}
	}
}