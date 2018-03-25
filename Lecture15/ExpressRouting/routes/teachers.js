const express = require('express')

const route = express.Router()
let teachers = []

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