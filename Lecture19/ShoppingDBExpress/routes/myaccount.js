const route = require('express').Router()

route.get('/', (req, res) => {
  if (!req.user) {
    return res.send("Unauthorized")
  }

  res.send(req.user)
})

module.exports = route