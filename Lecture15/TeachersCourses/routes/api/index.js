const route = require('express').Router()

route.use('/teachers', require('./teachers'))
route.use('/courses', require('./courses'))

module.exports = route