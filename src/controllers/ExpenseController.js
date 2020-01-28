const { expenses } = require('../models')

const { Op } = require('sequelize')

module.exports = {
  index(req, res) {

    let start_date = req.query.start_date;
		let end_date = req.query.end_date;
    
    if (start_date && end_date) {
      expenses.all({
        where: { 
          date: {
            [Op.gte]: new Date(start_date),
            [Op.lte]: new Date(end_date)
          }
        }
      }).then(expenses => {
        res.status(200).send({
          expenses: expenses
        })
      })
    } else {
      expenses.all().then(expenses => {
        res.status(200).send({
          expenses: expenses
        })
      })
    }
  },
  async create(req, res) {
    try {
      await expenses.create(req.body).then(expense => {
        res.status(201).send({
          id: expense._id, message: "Expense registered."
        })
      }).catch(error => {
        res.status(400).send({
          message: "Expense already exists."
        })
      })
    } catch (error) {
      res.status(400).send({
        message: "Expense registration failed."
      })
    }
  },
  show(req, res) {
    const id = req.params.id
    expenses.findAll({
      where: {
        id: id
      }
    }).then(expense => {
      if (expense && expense.length > 0) {
        res.status(200).send({
          data: expense
        })
      } else {
        res.status(204).send()
      }
    })
  },
  update(req, res) {
    const id = req.params.id
    expenses.update(req.body, {
      where: {
        id: id
      }
    }).then(expense => {
      res.status(200).send({
        id: expense._id, message: "Expense successfully update."
      })
    }).catch(error => {
      res.status(400).send({
        message: "Failed to update expense."
      })
    })
  },
  delete(req, res) {
    const id = req.params.id
    expenses.destroy({
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