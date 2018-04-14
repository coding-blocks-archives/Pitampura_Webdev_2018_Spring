const route = require('express').Router()

route.get('/', (req, res) => {
  res.render('signin')
})

module.exports = route