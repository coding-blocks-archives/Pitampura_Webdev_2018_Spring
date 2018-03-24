const express = require('express')
const path = require('path')

const app = express()

let todos = []

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('todos', {
    title: "Todo List",
    todos
  })
})

app.get('/add', (req, res) => {
  let todo = {
    task: req.query.task
  }
  todos.push(todo)
  res.redirect('/')
})

app.listen(3456, () => {
  console.log("Server started on http://localhost:3456")
})