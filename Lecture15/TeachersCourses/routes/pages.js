const route = require('express').Router()
const teachers = require('../data').teachers

route.get('/teachers', (req, res) => {
  res.render('teachers')
})

route.get('/courses', (req, res) => {
  res.render('courses', {teachers})
})


module.exports = route