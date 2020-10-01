const express = require('express')
const router = require('./routes/router')
const MongoDbConnect = require('./MongodbConnect')

const app = express()

MongoDbConnect()
app.use(express.json())
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.use('/', router)

app.listen(5000)