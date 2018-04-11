require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

// Creating new Express app
const app = express()

app.set('view engine', 'hbs')

app.use(express.static(`${__dirname}/public`))

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// Mongo connection set-up
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {
  console.log('Mongoose has connected to MongoDB!')
})

mongoose.connection.on('error', (error) => {
  console.error(`
    MongoDB connection error!!! 
    ${error}
  `)
  process.exit(-1)
})

// Registering controllers
const userController = require('./controllers/userController')
app.use('/api/users', userController)

const storesController = require('./controllers/storesController')
app.use('/api/users/:userId/stores', storesController)

const giftsController = require('./controllers/giftsController')
app.use('/api/users/:userId/stores/:storeId/gifts', giftsController)

// Starting server
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`)
})
