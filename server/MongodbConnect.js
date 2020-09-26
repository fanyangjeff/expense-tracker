const uri = 'mongodb+srv://jeffyang:2506@jeffcluster.hk0x7.mongodb.net/budgetPlanner?retryWrites=true&w=majority'
const mongoose = require('mongoose')


const mongodbConnect = async () => {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = mongodbConnect

