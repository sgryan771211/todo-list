// init
let list = document.querySelector('#my-todo')
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(todo)
}

function addItem (text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem)
}

// Create
const addBtn = document.querySelector('#addBtn')
addBtn.addEventListener('click', function (event) {
  console.log(this)
  console.log(event.target)
  let inputValue = document.querySelector('#newTodo').value
  console.log(inputValue)
    if (inputValue !== "") {
      addItem(inputValue)
  }
})

const input = document.querySelector('#newTodo')
input.addEventListener('keypress', function (event) {
  let inputValue = document.querySelector('#newTodo').value
  if (inputValue !== "" && event.keyCode === 13) {
    addItem(inputValue)
  }  
})

// Todo and Done
function addTodo () {
  let addTodo = document.createElement('li')
  addTodo.innerHTML = `
    <h5>Todo</h5>    
  `
  list.insertBefore(addTodo, list.children[0])
  
}

function addDone () {
  let addDone = document.createElement('ul')
  addDone.innerHTML = `
    <h5>Done</h5>
  `
  addDone.setAttribute("id","done")
  addDone.style.display = 'none'
  list.after(addDone)
}

addDone()
const done = document.querySelector('#done')

list.addEventListener('click', function (event) {
    let li = event.target.parentElement
  if(event.target.tagName === 'LABEL') {
    addTodo()
    done.style.display = 'block'
  }
},{once:true})

// Delete and check
list.addEventListener('click', function (event) {
  console.log(this)
  console.log(event.target)
  let li = event.target.parentElement
  if (event.target.classList.contains('delete')) {
    li.remove()
  } else if (event.target.tagName === 'LABEL') {
    event.target.classList.toggle('checked')
    list.nextElementSibling.appendChild(li)
    }
})  


done.addEventListener('click', function (event) {
  console.log(this)
  console.log(event.target)
  let li = event.target.parentElement
  if (event.target.classList.contains('delete')) {
    li.remove()
  } else if (event.target.tagName === 'LABEL') {  
    event.target.classList.toggle('checked')
    list.appendChild(li)
    }
})