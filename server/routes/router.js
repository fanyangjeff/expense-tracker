const express = require('express')
const router = express.Router()
const BudgetModel = require('../models/Budget')
const {getAllBudgets, getSingleBudget, createBudget, updateBudget, deleteBudget} = require('../budgets/budget')

router
    .get('/allBudgets', getAllBudgets)
    .get('/budget/:id', getSingleBudget)
    .post('/add', createBudget)
    .put('/update/:id', updateBudget)
    .delete('/delete/:id', deleteBudget)
    


module.exports = router