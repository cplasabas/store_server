const { terms } = require('../models')

module.exports = {
  index(req, res) {
    terms.all().then(terms => {
      res.status(200).send({
        terms: terms
      })
    })
  },
  async create(req, res) {
    try {
      await terms.create(req.body).then(term => {
        res.status(201).send({
          id: term._id, message: "Term created."
        })
      }).catch(error => {
        res.status(400).send({
          message: "Term already exists."
        })
      })
    } catch (error) {
      res.status(400).send({
        message: "Term registration failed."
      })
    }
  },
  show(req, res) {
    const id = req.params.id
    terms.findAll({
      where: {
        id: id
      }
    }).then(term => {
      if (term && term.length > 0) {
        res.status(200).send({
          data: term
        })
      } else {
        res.status(204).send()
      }
    })
  },
  update(req, res) {
    const id = req.params.id
    terms.update(req.body, {
      where: {
        id: id
      }
    }).then(term => {
      res.status(200).send({
        id: term._id, message: "Term successfully update."
      })
    }).catch(error => {
      res.status(400).send({
        message: "Failed to update term. " + error
      })
    })
  },
  delete(req, res) {
    const id = req.params.id
    terms.destroy({
      where: {
        id: id
      }
    }).then(() => {
      res.status(200).send({
        message: "Successfully deleted."
      })
    }).catch(error => {
      res.status(400).send({
        message: "Failed to delete."
      })
    })
  }
}