const express = require('express')
const path = require('path')

const app = express()

let todos = []

app.use('/', express.static(path.join(__dirname, 'public_html')))

app.get('/todos', (req, res) => {
  res.send(todos)
})

app.get('/addtodo', (req, res) => {
  todos.push(req.query.newtodo)
  res.send('success')
})

app.listen(3333, () => {
  console.log('Server started on http://localhost:3333')
})