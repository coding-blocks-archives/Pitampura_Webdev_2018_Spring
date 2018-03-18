const express = require('express')

const server = express()

server.get('/', (req, res) => {
  res.send("HELLO THERE!!")
})

server.get('/greet', (req, res) => {
  res.send("How are you ?")
})
server.get('/greet/:person', (req, res) => {
  res.send(`How are you ${req.params.person}?`)
})
server.get('/greet/:person/night', (req, res) => {
  res.send(`Goodnight ${req.params.person}!`)
})

server.get('/bye', (req, res) => {
  res.send(`Goodbye ${req.query.p}!`)
})

server.get('/good', (req, res) => {
  res.send(`Good${req.query.t} ${req.query.p}!`)
})

// http://google.com/search?q=javascript



server.listen(4444)