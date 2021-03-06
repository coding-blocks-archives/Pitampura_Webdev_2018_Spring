$(function () {

  let task = $('#task')
  let btn = $('#btn')
  let list = $('#list')

  function refresh(todos) {
    list.empty()
    for (todo of todos) {
      list.append(`<li>${todo.task}</li>`)
    }
  }

  btn.click(function (event) {
    event.preventDefault()
    console.log(event)
    $.post(
      '/api/todos',
      {
        task: task.val()
      },
      (data) => refresh(data)
      )
  })

})