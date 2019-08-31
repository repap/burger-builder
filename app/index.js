const express = require('express')
const dbType = require('./db/types')
const bodyParser = require('body-parser')
const morgan = require('morgan')

require('./db').config(dbType.MONGO_DB)


const BurgerRouter = require('./components/burger/router')

const app = express()

app.use(morgan('common'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/burger', BurgerRouter)

module.exports = (() => app)()