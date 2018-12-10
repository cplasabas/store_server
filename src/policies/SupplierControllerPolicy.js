const joi = require("joi")

module.exports = {
	create (req,res,next) {
		const schema = {
			name: joi.string(),
			code: joi.string(),
			email: joi.string().email().allow(''),
			contact: joi.string().allow(''),
			address: joi.string().allow('')
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