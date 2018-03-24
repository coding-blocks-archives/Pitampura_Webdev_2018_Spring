const express = require('express')
const path = require('path')

const app = express()

let todos = []

app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('todos', {
    title: "Todo List",
    todos
  })
})

app.post('/', (req, res) => {
  let todo = {
    task: req.body.task
  }
  todos.push(todo)
  res.redirect('/')
})

app.get('/api/todos', (req, res) => {
  res.send(todos)
})

app.post('/api/todos', (req, res) => {
  let todo = {
    task: req.body.task
  }
  todos.push(todo)
  res.redirect('/api/todos')
})

app.listen(3456, () => {
  console.log("Server started on http://localhost:3456")
})