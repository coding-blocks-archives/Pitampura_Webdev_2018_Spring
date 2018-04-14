const route = require('express').Router()
const {User} = require('../db/models')

route.get('/', (req, res) => {
  res.render('signup')
})

route.post('/', (req, res) => {
  if (!req.body.username) {
    return res.send("Cannot create user with no username")
  }
  if (!req.body.password) {
    return res.send("Cannot create  user without password")
  }

  User.create({
    username: req.body.username,
    password: req.body.password
  }).then((newuser) => {
    res.redirect('/signin')
  }).catch((err) => {
    res.send(
      `Error in creating user
      ${err.message}
      `
    )
  })


})

module.exports = route