const joi = require("joi")

module.exports = {
	create (req,res,next) {
		const schema = {
			code: joi.string(),
			description: joi.string().allow(''),
			category_id: joi.number().integer(),
			supplier_id: joi.number().integer(),
			shipment_id: joi.number().integer(),
			price: joi.number().positive().precision(2).required(),
			status: joi.string().allow(''),
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