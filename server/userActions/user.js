const UserModel = require('../models/User')

const getUser = async (req, res) => {
    res.send("getUser")
}


const createUser = async (req, res) => {
    UserModel.create(req.body, (err, result) => {
        res.status(200).json(result)
    })
        
}

module.exports = {getUser, createUser}