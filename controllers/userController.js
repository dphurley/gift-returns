const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', (request, response) => {
  User.find({})
    .then((users) => {
      response.json(users)
    })
    .catch((error) => {
      console.log(error)
    })
})

router.get('/new', (request, response) => {
  response.json('users/new', { pageTitle: 'New User' })
})

router.post('/', (request, response) => {
  const newUser = request.body

  console.log('In here!!!!')
  console.log(newUser)
  if (!newUser.photoUrl) {
    newUser.photoUrl = 'http://www.fillmurray.com/g/300/300'
  }

  User.create(newUser)
    .then((savedUser) => {
      response.json(savedUser)
    })
    .catch((error) => {
      console.log(error)
    })
})

router.get('/:userId', (request, response) => {
  const userId = request.params.userId
  User.findById(userId)
    .then((user) => {
      response.json(user)
    })
    .catch((error) => {
      console.log(error)
    })
})

router.get('/:userId/edit', (request, response) => {
  const userId = request.params.userId

  User.findById(userId)
    .then((user) => {
      response.json(user)
    })
    .catch((error) => {
      console.log(error)
    })
})

router.delete('/:userId', (request, response) => {
  const userId = request.params.userId

  User.findByIdAndRemove(userId)
    .then(() => {
      response.send(200)
    })
    .catch((error) => {
      console.log(error)
    })
})

router.put('/:userId', (request, response) => {
  const userId = request.params.userId
  const updatedUserInfo = request.body

  User.findByIdAndUpdate(userId, updatedUserInfo, { new: true })
    .then(() => {
      response.redirect(`/users/${userId}`)
    })
})

module.exports = router
