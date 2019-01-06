const joi = require("joi")

module.exports = {
	create (req,res,next) {
		const schema = {
			product_code: joi.string(),
			client_name: joi.string(),
      return_date: joi.date().iso()
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