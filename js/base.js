var log = function() {
  console.log.apply(console, arguments)
}
var e = function(selector){
  return document.querySelector(selector)
}
log("bsae")
// var addButton = e("#id-button-add")
// log(addButton)
// addButton.addEventListener('click', function(){
//   log('addButton')
// })
var s = e("#id-input-todo")
log(s)
// var templateTodo = function(todo) {
//   var t = `
//     <div class="task-list">
//       <div class="task-item">
//         <span><input type="checkbox"></span>
//         <span class="task-content">${todo}</span>
//         <span>delete</span>
//         <span>detail</span>
//       </div>
//     </div>
//   `
//   return t
// }
// var saveTodos = function() {
//
// }
//
//
// var save = function(array) {
//   var s = JSON.stringify(array)
//   localStorage.taskList = s
// }
//
// var load = function() {
//   var s = localStorage.taskList
//   return JSON.parse(s)
// }
