const joi = require("joi")

module.exports = {
	create (req,res,next) {
		const schema = {
			or_number: joi.string(),
			name: joi.string(),
			description: joi.string().allow(''),
			tin: joi.string(),
			amount: joi.number(),
			or_type: joi.number().integer().allow(null).optional(),
			type: joi.number().integer(),
			date: joi.date().iso()
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