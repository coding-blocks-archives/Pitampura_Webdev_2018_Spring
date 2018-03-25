const route = require('express').Router()
const teachers = require('../../data').teachers


route.get('/', (req, res) => {
  res.send(teachers)
})

route.post('/', (req, res) => {
  teachers.push({
    name: req.body.name
  })
  res.send({message: "success", id: teachers.length})
})

module.exports = route