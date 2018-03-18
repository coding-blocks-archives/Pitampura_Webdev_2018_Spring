$(function () {
  let newtodo = $('#newtodo')
  let addtodo = $('#addtodo')
  let todolist = $('#todolist')

  function refreshTodos() {
    todolist.empty()
    $.get('/todos', function (data) {
      for (todo of data) {
        todolist.append(`<li>${todo}</li>`)
      }
    })
  }
  refreshTodos()

  addtodo.click(function () {
    let newtask = newtodo.val()
    $.get(
      '/addtodo?newtodo='+newtask,
      function (data) {
        if (data != 'success') {
          alert('Could not add todo')
        } else {
          refreshTodos()
        }
      }
    )
  })


})

