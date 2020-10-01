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
    },
    expense: {
        type: Boolean,
        required: [true, 'need to choose either expense or income']
    }
})

module.exports = mongoose.model('budget', BudgetModel)