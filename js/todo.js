var log = function() {
  console.log.apply(console, arguments)
}

var e = function(selector) {
  return document.querySelector(selector)
}


var templateTodo = function(status, content) {
  var className = ''
  if(status){
    className = 'task-done'
  }
  var t = `
    <div class="task-item ${className}">
      <input type="checkbox" class='todo-done'>
      <span class="task-content">${content}</span>
      <span class='todo-delete'>删除</span>
      <span class='todo-detail'>详情</span>
    </div>
  `
  return t
}

var toggleClass = function(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className)
  } else {
    element.classList.add(className)
  }
}

var save = function(array) {
  var s = JSON.stringify(array)
  localStorage.taskList = s
}
var load = function() {
  var s = localStorage.taskList
  return JSON.parse(s)
}

var saveItems = function() {
  // 选出 content 内容标签
  // 保存到 数组之中 数组每个元素 是一个 对象 对象包括 class content

  var taskItems = document.querySelectorAll('.task-item')
  var items = []
  for (var i = 0; i < taskItems.length; i++) {
    var c = taskItems[i]
    log('c', c)
    var status = c.classList.contains('task-done')
    var content = c.querySelector('.task-content').innerHTML
    log('content', content)
    log('content', status, content)
    var taskItem = {
      status: status,
      content: content,
    }
    items.push(taskItem)
  }
  // 保存到 stringify
  save(items)
}
//
var addButton = e("#id-button-add")
addButton.addEventListener('click', function() {
  var todoInput = e('#id-input-add')
  var value = todoInput.value
  insertItem(false, value)
  // saveItems
  saveItems()
  log('add Item')
})


var todoList = e('#id-div-list')
todoList.addEventListener('click', function(event) {
  var target = event.target
  if (target.classList.contains('todo-delete')) {
    var todoDiv = target.parentElement
    todoDiv.remove()
  } else if (target.classList.contains('todo-detail')) {
    log('detail')
  } else if (target.checked) {
    var todoDiv = target.parentElement
    toggleClass(todoDiv, 'task-done')
  } else if(!target.checked){
    var todoDiv = target.parentElement
    toggleClass(todoDiv, 'task-done')
  }
  // 改变状态之后 保存 taskItem
  saveItems()
})
var insertItem = function(className, content){
  var t = templateTodo(className, content)
  var todoList = e('#id-div-list')
  todoList.insertAdjacentHTML('beforeend', t)
}
var loadTaskItem = function() {
  var items = load()
  log('load items', items)
  // 添加到页面之中
  for (var i = 0; i < items.length; i++) {
    var item = items[i]
    insertItem(item.status, item.content)
  }
}

var __main = function(){
  loadTaskItem()
}

__main()
