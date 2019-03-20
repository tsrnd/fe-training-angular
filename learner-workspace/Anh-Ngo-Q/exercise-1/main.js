let delayTime = 2000;

let addTask = () => {
  taskValue = document.getElementById('task-input').value
  return new Promise((rel) => {
    setTimeout(() => {
      rel(taskValue)
    }, delayTime)
  }).then((taskValue) => {
    let newTaskItem = document.createElement('li');

    // add checkbox to item
    let checkBoxItem = document.createElement('input')
    checkBoxItem.setAttribute('type', 'checkbox');

    // add content to item
    let content = document.createElement('span');
    content.innerText = taskValue;

    // add delete button to item
    let delBtn = document.createElement('button');
    delBtn.innerText = 'x';
    delBtn.setAttribute('onclick', 'delTask(this)')

    newTaskItem.append(checkBoxItem);
    newTaskItem.append(content);
    newTaskItem.append(delBtn);

    document.getElementById('todo-list').appendChild(newTaskItem);
  })
}

let delTask = (e) => {
  confirm('Do you want to delete this task?') ? e.parentElement.remove() : null
}

let delMultiTask = () => {
  let listTodo = document.getElementById('todo-list');
  let arrTask = Array.from(listTodo.childNodes);
  if (confirm('Do you want to delete many task ?')) {
    arrTask.map((child) => {
      if (child.childNodes[0].checked) {
        child.remove()
      }
    })
  }
}

