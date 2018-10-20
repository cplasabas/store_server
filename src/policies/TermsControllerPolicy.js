const joi = require("joi")

module.exports = {
  create(req, res, next) {
    const schema = {
      name: joi.string(),
      description: joi.string().allow(''),
      month: joi.number().integer().allow(''),
      year: joi.number().integer().allow('')
    }

    const { error, value } = joi.validate(req.body, schema)

    if (!error) {
      next()
    } else {
      res.status(400).send({
        error: error.details[0].message
      })
    }
  }
}