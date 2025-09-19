let input = document.querySelector('.todo')
let btn = document.querySelector('.addBtn')
let todoList = document.querySelector('.task')
let todos = []
window.onload = function(){
    let storedTodos = JSON.parse(localStorage.getItem('todoarray'))
    if(storedTodos!==null){
        todos = storedTodos
        for(let i=0;i<todos.length;i++){
            addto(todos[i])
        }
    }
}
btn.addEventListener('click',()=>{
	let todo = input.value
    if(todo.length===0){
        alert("Please enter a task")
        return
    }
    input.value = ''
	todos.push(todo)
        localStorage.setItem('todoarray',JSON.stringify(todos))
    console.log(todos)
	addto(todo)
	})
function addto(todo){
	let list = document.createElement('li')
    list.style.cursor = 'pointer'
	list.textContent = todo
	todoList.appendChild(list)
    list.addEventListener('click',()=>{
		list.style.textDecoration = 'line-through'
	})
    list.addEventListener('dblclick',()=> {
        return remove(todo,list)
    })
}
function remove(todo,list){
	let index = todos.indexOf(todo)
	todos.splice(index,1)
	todoList.removeChild(list)
        localStorage.setItem('todoarray',JSON.stringify(todos))
}

