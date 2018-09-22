const joi = require("joi")

module.exports = {
	register (req,res,next) {
		const schema = {
			first_name: joi.string(),
			last_name: joi.string(),
			email: joi.string().email(),
			username: joi.string(),
			password: joi.string(),
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