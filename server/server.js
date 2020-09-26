const express = require('express')
const router = require('./routes/router')
const MongoDbConnect = require('./MongodbConnect')

const app = express()

MongoDbConnect()
app.use(express.json())


app.use('/', router)

app.listen(5000)