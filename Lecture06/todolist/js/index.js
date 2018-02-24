window.onload = function () {
  let todoinput = document.getElementById('input-todo')
  let btnadd = document.getElementById('btn-add')
  let todolist = document.getElementById('todo-list')

  console.log(todoinput)
  console.log(btnadd)
  console.log(todolist)

  btnadd.onclick = function () {
    let todo = todoinput.value
    console.log(todo)

    if(todo === ''){
      window.alert("Please enter a todo first!")
    } else{
      let li = document.createElement('li');
      li.setAttribute('class', 'list-group-item list-group-item-warning')
      li.appendChild(document.createTextNode(todo))
      todolist.appendChild(li)

      todoinput.value = ''
    }

  }
}



