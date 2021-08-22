document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    createTodo(e.target.new_task_description.value)
    form.reset()
  })
});

function createTodo(todo){
  let p = document.createElement('p')
  p.textContent = todo
  document.getElementById('tasks').appendChild(p)
}