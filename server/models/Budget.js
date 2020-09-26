const mongoose = require('mongoose')

const BudgetModel = mongoose.Schema({
    _id: {
        type: String,
        required: [true, 'unique id is required']
    }, 
    title: {
        type: String,
        required: [true, 'title is required']
    },
    amount: {
        type: Number,
        required: [true, 'amount has to be a number']
    }
})

module.exports = mongoose.model('budget', BudgetModel)