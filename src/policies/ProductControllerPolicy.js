const joi = require("joi")

module.exports = {
	create (req,res,next) {
		const schema = {
			name: joi.string(),
			description: joi.string().allow(''),
			category_id: joi.number().integer(),
			manufacturer_id: joi.number().integer(),
			price: joi.number().integer(),
			carat: joi.number().integer().allow(null),
			gold: joi.number().integer().allow(null),
			diamond: joi.number().integer().allow(null),
			labor: joi.number().integer().allow(null),
			manufacture_cost: joi.number().integer().allow(null),
			manufacture_date: joi.date().iso()
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