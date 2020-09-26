const BudgetModel = require('../models/Budget')

const getAllBudgets = async (req, res) => {
    BudgetModel
        .find()
        .exec((err, result) => {
            if (err) {
                res.status(404).json({'succeed': false})
                return
            } 
            res.status(200).json(result)
        })
}


const getSingleBudget = async (req, res) => {
    BudgetModel
        .findOne({'_id': req.params.id})
        .exec((err, result) => {
            if (err) {
                res.status(404).json({'succeed': false})
                return
            }
            res.status(200).json(result)
        })
}

const createBudget = async (req, res) => {
    BudgetModel
        .create(req.body, (err, result) => {
            if (err) {
                res.status(404).json(err)
                return
            }
            res.status(200).json(result)
        })
}


const updateBudget = async (req, res) => {
    BudgetModel
        .update({'_id': req.params.id}, req.body)
        .exec((err, result) => {
            if (err) {
                res.status(403).json({name: err.name})
                return
            }
            if (!result.n) {
                res.status(404).json({'succeed': false})
                return
            }   
            res.status(200).json({'succeed': true})
        })
}

const deleteBudget = async (req, res) => {
    BudgetModel
        .deleteOne({'_id': req.params.id})
        .exec((err, result) => {
            if (err) {
                res.status(404).json(err)
                return
            }

            if (!result.n) {
                res.status(404).json({'succeed': false})
                return
            }
            res.status(200).json({'succeed': true})
        })
}

module.exports = {getAllBudgets, getSingleBudget, createBudget, updateBudget, deleteBudget}