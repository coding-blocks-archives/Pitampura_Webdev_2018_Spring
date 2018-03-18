const express = require('express')

const server = express()

server.get('/', (req, res) => {
  res.send("HELLO THERE!!")
})

server.listen(4444)