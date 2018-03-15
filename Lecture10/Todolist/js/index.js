/**
 * Created by bhavyaagg on 10/03/18.
 */

let todos = [];
let todoList;

$(document).ready(function () {
  todoList = $('#todoList');
  let newTodoInput = $("#newTodo");
  let addTodoBtn = $("#addTodo");
  let clearTodosBtn = $("#clearTodos");
  
  refreshTodos(true)
  
  addTodoBtn.click(function () {
    addTodo(newTodoInput.val());
    newTodoInput.val("");
  })
  
  clearTodosBtn.click(function () {
    // let newTodos = [];
    // for (let i = 0; i < todos.length; i++) {
    //   if (!todos[i].done) {
    //     newTodos.push(todos[i]);
    //   }
    // }
    // todos = newTodos;
    
    todos = todos.filter((todo) => !todo.done)
    
    refreshTodos();
  })
  
  // addTodoBtn.click(function () {
  //   let newTodoValue = newTodoInput.val();
  //
  //   todos.push({
  //     task: newTodoValue,
  //     done: false
  //   });
  //
  //   localStorage.setItem("todos", JSON.stringify(todos));
  //
  //   let todoItem = $(`<li class="list-group-item"></li>`)
  //
  //   let contentDiv = $(`<div class="row"></div>`)
  //
  //   let checkBoxDiv = $(`<div class="col-2 text-center"></div>`)
  //
  //   let check = $(`<input type="checkbox">`).click(function () {
  //     contentDiv.css("text-decoration", "line-through");
  //   })
  //
  //   let task = $(`<div class="col">${newTodoValue}</div>`)
  //
  //   contentDiv.append(checkBoxDiv.append(check)).append(task)
  //
  //   todoItem.append(contentDiv)
  //
  //   todoList.append(todoItem)
  // });
  
});

function refreshTodos(firstPageLoad = false) {
  if (!firstPageLoad) {
    saveTodos();
  }
  todoList.empty();
  retrieveTodos();
  
  for (i in todos) {
    let todoItem = createTodoItem(+i);
    todoList.append(todoItem);
  }
}

function remove(todoId) {
  todos.splice(todoId, 1);
  refreshTodos();
}

function moveUp(todoId) {
  todos.splice(todoId - 1, 0, todos.splice(todoId, 1)[0]);
  refreshTodos();
}

function moveDown(todoId) {
  todos.splice(todoId + 1, 0, todos.splice(todoId, 1)[0]);
  refreshTodos();
}

function createTodoItem(i) {
  let todoItem = $(`<li class="list-group-item"></li>`)
  
  let contentDiv = $(`<div class="row"></div>`)
  
  let checkBoxDiv = $(`<div class="col-2 text-center"></div>`)
  
  let check = $(`<input type="checkbox">`).click(function () {
    todos[i].done = !todos[i].done;
    refreshTodos();
  })
  
  if (todos[i].done) {
    contentDiv.css("text-decoration", "line-through");
    check.prop("checked", "true");
  }
  
  let iconUp = $(`<div class="col-sm-1"><i class="fas fa-chevron-up move-icon"></i></div>`)
    .click(() => {
      moveUp(i);
    })
  let iconDown = $(`<div class="col-sm-1"><i class="fas fa-chevron-down move-icon"></i></div>`)
    .click(() => {
      moveDown(i);
    })
  let removeButton = $(`<div class="col-sm-1"><i class="fas fa-times delete"></i></div>`)
    .click(() => {
      remove(i);
    })
  
  
  let task = $(`<div class="col">${todos[i].task}</div>`)
  
  contentDiv.append(checkBoxDiv.append(check)).append(task).append(iconUp).append(iconDown).append(removeButton);
  
  todoItem.append(contentDiv)
  
  return todoItem;
}

function retrieveTodos() {
  let savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    todos = JSON.parse(savedTodos);
  }
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(task) {
  todos.push({
    task: task,
    done: false
  });
  refreshTodos();
}