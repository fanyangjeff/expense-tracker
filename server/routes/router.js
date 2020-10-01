const express = require('express')
const router = express.Router()
const BudgetModel = require('../models/Budget')
const {getAllBudgets, getSingleBudget, createBudget, updateBudget, deleteBudget} = require('../userActions/budget')
const {getUser, createUser} = require('../userActions/user')
router
    .get('/allBudgets', getAllBudgets)
    .get('/budget/:id', getSingleBudget)
    .post('/add', createBudget)
    .put('/update/:id', updateBudget)
    .delete('/delete/:id', deleteBudget)

router
    .get('/getUser', getUser)
    .post('/addUser', createUser)


module.exports = router