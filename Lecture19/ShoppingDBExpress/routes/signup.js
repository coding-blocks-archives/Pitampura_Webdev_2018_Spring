const route = require('express').Router()

route.get('/', (req, res) => {
  res.render('signup')
})

module.exports = route