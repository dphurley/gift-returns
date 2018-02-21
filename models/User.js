const mongoose = require('mongoose')
const Schema = require('../db/Schema')

const User = mongoose.model('User', Schema.UserSchema)

module.exports = User
