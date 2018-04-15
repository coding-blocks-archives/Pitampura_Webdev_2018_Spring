const route = require('express').Router()
const {Product} = require('../db/models')

route.get('/', (req, res) => {
  Product.findAll()
    .then(products => res.json(products))
    .catch((err) => res.send(err.message))
})

route.post('/', (req, res) => {
  Product.create({
    name: req.body.name,
    price: req.body.price
  })
    .then((createdProduct) => res.json(createdProduct))
    .catch((err) => res.send(err.message))
})

module.exports = route