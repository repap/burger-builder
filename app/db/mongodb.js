const {db} = require('../config/environment') 
const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://${db.USER}:${db.PASSWORD}${db.URL}`, { useNewUrlParser: true })

const dbConnection = mongoose.connection
dbConnection.on('error', console.error.bind(console, 'connection error:'))
dbConnection.once('open', () => console.log('mongodb connected'))