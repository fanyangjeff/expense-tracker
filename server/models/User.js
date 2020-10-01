const mongoose = require('mongoose')

const UserModel = mongoose.Schema({
    _id: {
        type: String,
        required: true
    }, 
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model('user', UserModel)